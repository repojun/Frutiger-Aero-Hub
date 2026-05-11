import { supabase } from "../supabase";

export const addWaitlist = async (email) => {
  const { data, error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    // postgres error code for duplication (only when column is UNIQUE)
    if (error.code === "23505") {
      return { error: "Email already listed" };
    }

    return { error: error.message };
  }

  return { data };
};
