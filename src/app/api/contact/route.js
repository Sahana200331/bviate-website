export const dynamic = "force-dynamic"
import { createClient } from "@supabase/supabase-js"

export async function POST(request) {
  try {
    // Step 1: Parse body
    let body
    try {
      body = await request.json()
    } catch (parseErr) {
      console.error("STEP 1 FAILED - Cannot parse request body:", parseErr.message)
      return Response.json({ success: false, error: "Invalid request body" }, { status: 400 })
    }
    console.log("STEP 1 OK - Body received:", JSON.stringify(body))

    // Step 2: Check env vars
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    console.log("STEP 2 - ENV CHECK:", {
      url: supabaseUrl ?? "MISSING",
      keyExists: !!supabaseKey,
      keyLength: supabaseKey?.length ?? 0
    })
    if (!supabaseUrl || !supabaseKey) {
      console.error("STEP 2 FAILED - Missing env variables")
      return Response.json({ success: false, error: "Server config error" }, { status: 500 })
    }

    // Step 3: Create Supabase client
    let supabase
    try {
      supabase = createClient(supabaseUrl, supabaseKey)
      console.log("STEP 3 OK - Supabase client created")
    } catch (clientErr) {
      console.error("STEP 3 FAILED - Cannot create Supabase client:", clientErr.message)
      return Response.json({ success: false, error: "DB connection error" }, { status: 500 })
    }

    // Step 4: Extract fields
    const { name, email, whatsapp, service, message } = body
    console.log("STEP 4 - Fields extracted:", { name, email, whatsapp, service, message })

    // Step 5: Insert into Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert([{
        name,
        email,
        whatsapp,
        service_interested: service,
        message
      }])
      .select()

    if (error) {
      console.error("STEP 5 FAILED - Supabase insert error:", JSON.stringify(error))
      return Response.json({ success: false, error: error.message }, { status: 500 })
    }

    console.log("STEP 5 OK - Lead saved successfully:", JSON.stringify(data))
    return Response.json({ success: true, data }, { status: 200 })

  } catch (err) {
    console.error("UNEXPECTED CRASH:", err.message, err.stack)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
