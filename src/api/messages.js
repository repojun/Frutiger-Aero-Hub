import { supabase } from "../supabase";

export const getMessages = async (limit = 5, offset = 0) => {
  return await supabase
    .from("guestbook")
    .select("*") // get everything
    .order("created_at", { ascending: false }) // newest messages first
    .range(offset, offset + limit - 1); // "only give me rows from Index X to Index Y", in this case, 0 -> 4, on the front end it will keep increasing the "limit" for every new page
};

export const addMessage = async (message, website, country, name, quote) => {
  const anonId = localStorage.getItem("temp_id");

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
      anon_id: anonId,
    }),
  });

  return await res.json();
};
