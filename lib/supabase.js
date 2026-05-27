import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dnrgwoyupayhugejnglx.supabase.co/rest/v1/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucmd3b3l1cGF5aHVnZWpuZ2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MDEyODYsImV4cCI6MjA5NDQ3NzI4Nn0.fT9lKFMrbunqMwXFC-Ig2LDotleAf-n62NDIHKMeFiY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// projectid: dnrgwoyupayhugejnglx

// publishable key: sb_publishable_d13UqjgUgq7wcfMQtO21vQ_cgljSxUu

// https://expensesv2-chi.vercel.app


// Secure wrapper matching Supabase's storage contract interface
const ExpoSecureStoreAdapter = {
  getItem: async (key) => {
    return await SecureStore.getItemAsync(key);
  },
  setItem: async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  },
  removeItem: async (key) => {
    await SecureStore.deleteItemAsync(key);
  },
};