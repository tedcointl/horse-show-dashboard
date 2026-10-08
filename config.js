// Paste the two values from Supabase: Project Settings -> API (Project URL and the anon / publishable key).
// These are safe to publish: the database rules (setup.sql) only let the admin account change data.
window.ASQ_CONFIG = {
  supabaseUrl: "",   // e.g. "https://abcdxyz.supabase.co"
  supabaseKey: ""    // e.g. "eyJhbGciOi..." (anon / publishable key, NOT the service_role key)
};
