export const dynamic = "force-dynamic"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendEmail(payload) {
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@bviate.com"
  const { name, email, whatsapp, service, serviceOther, industry, message } = payload

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

async function sendToWebhook(payload) {
  const url = process.env.N8N_CONTACT_WEBHOOK_URL
  if (!url) return false

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
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

    const [emailResult, webhookResult] = await Promise.allSettled([
      sendEmail(payload),
      sendToWebhook(payload),
    ])

    if (emailResult.status === "rejected") {
      console.error("Contact form: Resend send failed:", emailResult.reason.message)
    }
    if (webhookResult.status === "rejected") {
      console.error("Contact form: n8n webhook failed:", webhookResult.reason.message)
    }

    const delivered = emailResult.status === "fulfilled" || webhookResult.status === "fulfilled"

    if (!delivered) {
      return Response.json({ success: false, error: "Delivery failed" }, { status: 500 })
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact form: unexpected error:", err.message, err.stack)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
