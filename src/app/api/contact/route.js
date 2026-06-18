export const dynamic = "force-dynamic"
import { createClient } from "@supabase/supabase-js"

export async function POST(request) {
  try {
    const body = await request.json()
    console.log("Submission received:", body)
    console.log("ENV CHECK:", {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      keyExists: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      keyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length
    })

    const { name, email, whatsapp, service, message } = body

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const { error } = await supabase
      .from("leads")
      .insert([{
        name,
        email,
        whatsapp,
        service_interested: service,
        message
      }])

    if (error) {
      console.error("Supabase error:", error)
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }

    return Response.json({ success: true }, { status: 200 })

  } catch (err) {
    console.error("Route crash:", err)
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    )
  }
}
