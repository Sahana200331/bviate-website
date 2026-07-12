export const dynamic = "force-dynamic"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    if (error) {
      console.error("Contact form: Resend send error:", JSON.stringify(error))
      return Response.json({ success: false, error: "Email delivery failed" }, { status: 500 })
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact form: unexpected error:", err.message, err.stack)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
