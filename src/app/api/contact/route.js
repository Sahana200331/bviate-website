export const dynamic = "force-dynamic"
import { Resend } from "resend"
import { validateContactForm } from "../../../lib/validateContactForm"

const resend = new Resend(process.env.RESEND_API_KEY)

const SANDBOX_FROM_EMAIL = "Bviate Website <onboarding@resend.dev>"

async function sendEmail({ name, email, whatsapp, service, serviceOther, industry, message }) {
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@bviate.com"
  const fromEmail = process.env.CONTACT_FROM_EMAIL || SANDBOX_FROM_EMAIL

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    whatsapp ? `WhatsApp/Phone: ${whatsapp}` : null,
    `Service: ${service}${serviceOther ? ` — ${serviceOther}` : ""}`,
    industry ? `Industry: ${industry}` : null,
    "",
    "Message:",
    message,
  ].filter(Boolean)

  const send = (from) => resend.emails.send({
    from,
    to: toEmail,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: lines.join("\n"),
  })

  let { error } = await send(fromEmail)

  // A custom from-domain that isn't verified in Resend yet (or loses
  // verification later) must never take down the whole contact form -
  // fall back to the always-working sandbox sender instead.
  if (error && error.statusCode === 403 && fromEmail !== SANDBOX_FROM_EMAIL) {
    console.error(
      "Contact form: CONTACT_FROM_EMAIL domain not verified in Resend, falling back to sandbox sender:",
      JSON.stringify(error)
    )
    ;({ error } = await send(SANDBOX_FROM_EMAIL))
  }

  if (error) throw new Error(JSON.stringify(error))
}

const WEBHOOK_TIMEOUT_MS = 8000

async function sendToWebhook({ name, email, whatsapp, service, serviceOther, industry, message }) {
  const url = process.env.N8N_CONTACT_WEBHOOK_URL
  if (!url) return false

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Always send every key, even when empty - omitting keys entirely
    // (JSON.stringify drops undefined values) is a common cause of n8n
    // workflow errors when an expression references a field that was
    // never present in the payload at all.
    body: JSON.stringify({
      name,
      email,
      phone: whatsapp || "",
      service,
      serviceOther: serviceOther || "",
      industry: industry || "",
      message,
    }),
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  })

  if (!res.ok) throw new Error(`n8n webhook responded ${res.status}`)
  return true
}

export async function POST(request) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseErr) {
      console.error("Contact form: cannot parse request body:", parseErr.message)
      return Response.json({ success: false, error: "Invalid request body" }, { status: 400 })
    }

    const { name, email, whatsapp, service, serviceOther, industry, message } = body

    const validationErrors = validateContactForm({ name, email, service, serviceOther, message, whatsapp })
    if (Object.keys(validationErrors).length > 0) {
      const [field, error] = Object.entries(validationErrors)[0]
      console.error("Contact form: server-side validation failed:", JSON.stringify(validationErrors))
      return Response.json({ success: false, error, field }, { status: 400 })
    }

    const payload = { name, email, whatsapp, service, serviceOther, industry, message }

    // Run in parallel (not sequential) so total worst-case latency is
    // max(email, webhook) rather than their sum - a slow n8n webhook
    // (up to WEBHOOK_TIMEOUT_MS) stacked after Resend risked pushing the
    // whole request close to Vercel's default 10s function timeout.
    const [emailResult, webhookResult] = await Promise.allSettled([
      sendEmail(payload),
      sendToWebhook(payload),
    ])

    if (emailResult.status === "rejected") {
      console.error(
        `Contact form: Resend send failed for service="${service}":`,
        emailResult.reason.message,
        emailResult.reason.stack
      )
    }
    if (webhookResult.status === "rejected") {
      console.error(
        `Contact form: n8n webhook failed for service="${service}":`,
        webhookResult.reason.message,
        webhookResult.reason.stack
      )
    }

    const emailSent = emailResult.status === "fulfilled"
    const webhookSent = webhookResult.status === "fulfilled" && webhookResult.value === true

    if (!emailSent && !webhookSent) {
      const emailError = emailResult.status === "rejected" ? emailResult.reason.message : "not attempted"
      const webhookError = webhookResult.status === "rejected" ? webhookResult.reason.message : "not configured"
      console.error(`Contact form: both delivery paths failed for submission from ${email}`)
      return Response.json(
        { success: false, error: "Delivery failed", emailError, webhookError },
        { status: 500 }
      )
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact form: unexpected error:", err.message, err.stack)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
