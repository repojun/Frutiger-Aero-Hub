import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // real visitor IP (Cloudflare first)
  const ip = req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"]?.split(",")[0] || "unknown";

  const { message, website, country, name, quote, anon_id } = req.body;

  const { data, error } = await supabase
    .from("guestbook")
    .insert([
      {
        message,
        website: website ?? null,
        country: country ?? null,
        name,
        quote: quote ?? null,
        anon_id,
        ip,
      },
    ])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ data });
}
