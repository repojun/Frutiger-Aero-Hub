import { supabase } from "../supabase";

export const getMessages = async (limit = 5, offset = 0) => {
  return await supabase
    .from("guestbook")
    .select("*") // get everything
    .neq("hidden", true) // hide rows where hidden is "true"; null/false are included in our messages
    .order("created_at", { ascending: false }) // newest messages first
    .range(offset, offset + limit - 1); // "only give me rows from Index X to Index Y", in this case, 0 -> 4, on the front end it will keep increasing the "limit" for every new page
};

export const addMessage = async (message, website, country, name, quote, referral_source) => {
  const anonId = localStorage.getItem("temp_id");

  console.log("Referral source before sending:", referral_source);

  const res = await fetch("/api/guestbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      website,
      country,
      name,
      quote,
      referral_source,
      anon_id: anonId,
    }),
  });

  const text = await res.text();
  console.log("API response body:", text);
  return text ? JSON.parse(text) : {};
};

export const getMessageCount = async () => {
  const { count, error } = await supabase.from("guestbook").select("*", { count: "exact", head: true });

  if (error) throw error;

  return count;
};
