export const dynamic = "force-dynamic"
import { createClient } from "@supabase/supabase-js"

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  try {
    const body = await request.json()
    const { name, email, whatsapp, service, message } = body

    // 1. Save to Supabase
    const { error } = await supabase
      .from("leads")
      .insert([{ name, email, whatsapp, service_interested: service, message }])

    if (error) throw error

    // 2. Fire N8N webhook
    await fetch(process.env.N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, whatsapp, service, message })
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json({ success: false, error: "Submission failed" }, { status: 500 })
  }
}