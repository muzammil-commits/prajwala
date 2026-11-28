import { createClient } from '@supabase/supabase-js';

// Environment variables with fallbacks to provided credentials
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://znnrcjmwwudmlhqbwfri.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpubnJjam13d3VkbWxocWJ3ZnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU4NDYxMTcsImV4cCI6MjExMTQyMjExN30.TJp4GGyZQbbEcR8_gEm8PNFwIIahzeKpocifwN2Z5mM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const checkSupabaseConnection = async (): Promise<{
  connected: boolean;
  tablesReady: boolean;
  message: string;
}> => {
  try {
    const { data, error } = await supabase.from('hero_slides').select('id').limit(1);
    if (!error) {
      return {
        connected: true,
        tablesReady: true,
        message: 'Connected to Supabase. Database tables are active and ready.',
      };
    }
    if (error.code === 'PGRST205' || error.message.includes('Could not find the table')) {
      return {
        connected: true,
        tablesReady: false,
        message:
          'Connected to Supabase project, but database tables need to be created using supabase/schema.sql.',
      };
    }
    return {
      connected: false,
      tablesReady: false,
      message: error.message || 'Unable to connect to Supabase.',
    };
  } catch (err: any) {
    return {
      connected: false,
      tablesReady: false,
      message: err.message || 'Connection test failed.',
    };
  }
};
