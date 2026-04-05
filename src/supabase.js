import { createClient } from "@supabase/supabase-js";

// grab env vars
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase Missing environment variables!");
}

// create client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
