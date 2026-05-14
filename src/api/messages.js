import { supabase } from "../supabase";

export const getMessages = async () => {
  return await supabase.from("guestbook").select("*");
};

export const addMessage = async (message, website, country, name, quote) => {
  const anonId = localStorage.getItem("temp_id");
  return await supabase.from("guestbook").insert([
    {
      message,
      name,
      website: website ?? null,
      country: country ?? null,
      quote: quote ?? null,
      anon_id: anonId,
    },
  ]);
};
