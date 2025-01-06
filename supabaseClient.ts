/** @format */

import { createClient } from "@supabase/supabase-js";

// Use optional chaining and nullish coalescing to safely access the values
const supabaseUrl = "https://supabasekong-voc8ssw.inprostore.com";
const supabaseAnonKey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTcyMzM2ODI0MCwiZXhwIjo0ODc5MDQxODQwLCJyb2xlIjoiYW5vbiJ9.aR2roJ2D28MS3LnI1kdsUx3WZwQDlXLOR9IBw6Fv0k8";

// Ensure we have the required values
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
