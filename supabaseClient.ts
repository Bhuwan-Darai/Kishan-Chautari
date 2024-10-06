/** @format */

import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

// Define a type for our expected configuration
interface ExpoConfig {
  extra?: {
    supabaseUrl?: string;
    supabaseAnonKey?: string;
  };
}

// Use type assertion to tell TypeScript that we expect Constants.expoConfig to be ExpoConfig
const expoConfig = Constants.expoConfig as ExpoConfig | null;

// Use optional chaining and nullish coalescing to safely access the values
const supabaseUrl = expoConfig?.extra?.supabaseUrl ?? process.env.supabaseUrl;
const supabaseAnonKey =
  expoConfig?.extra?.supabaseAnonKey ?? process.env.supabaseAnonKey;

// Ensure we have the required values
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
