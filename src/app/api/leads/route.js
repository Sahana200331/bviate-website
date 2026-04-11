import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return Response.json(
      { error: "Supabase environment variables are missing." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const whatsapp = String(body?.whatsapp ?? "").trim();
    const service_interested = String(body?.service_interested ?? "").trim();

    if (!name || !email || !whatsapp || !service_interested) {
      return Response.json(
        {
          error:
            "Name, email, WhatsApp number, and service interest are required.",
        },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { error } = await supabase
      .from("leads")
      .insert([{ name, email, whatsapp, service_interested }]);

    if (error) {
      return Response.json(
        { error: "Could not submit your request right now." },
        { status: 500 }
      );
    }

    return Response.json({ success: true }, { status: 201 });
  } catch {
    return Response.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
