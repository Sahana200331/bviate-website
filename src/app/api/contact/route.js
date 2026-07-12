export const dynamic = "force-dynamic"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendEmail({ name, email, whatsapp, service, serviceOther, industry, message }) {
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@bviate.com"

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    whatsapp ? `WhatsApp/Phone: ${whatsapp}` : null,
    `Service: ${service}${serviceOther ? ` (${serviceOther})` : ""}`,
    industry ? `Industry: ${industry}` : null,
    "",
    "Message:",
    message,
  ].filter(Boolean)

  const { error } = await resend.emails.send({
    from: "Bviate Website <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: lines.join("\n"),
  })

  if (error) throw new Error(JSON.stringify(error))
}

const WEBHOOK_TIMEOUT_MS = 8000

async function sendToWebhook({ name, email, whatsapp, service, serviceOther, industry, message }) {
  const url = process.env.N8N_CONTACT_WEBHOOK_URL
  if (!url) return false

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone: whatsapp, service, serviceOther, industry, message }),
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

    if (!name || !email || !service || !message) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const payload = { name, email, whatsapp, service, serviceOther, industry, message }

    let emailSent = false
    try {
      await sendEmail(payload)
      emailSent = true
    } catch (err) {
      console.error("Contact form: Resend send failed:", err.message)
    }

    // Fire-and-forget safety net: n8n appends the lead to a Google Sheet.
    // A slow/down webhook must never fail the request - Resend is the primary path.
    let webhookSent = false
    try {
      webhookSent = await sendToWebhook(payload)
    } catch (err) {
      console.error("Contact form: n8n webhook failed:", err.message)
    }

    if (!emailSent && !webhookSent) {
      return Response.json({ success: false, error: "Delivery failed" }, { status: 500 })
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact form: unexpected error:", err.message, err.stack)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
