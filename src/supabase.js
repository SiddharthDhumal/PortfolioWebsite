import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://kasrpuvzmuwpntcrvylj.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthc3JwdXZ6bXV3cG50Y3J2eWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExNDg0ODgsImV4cCI6MjAxNjcyNDQ4OH0.Wry3b6WXjpXG8tqCb9iUNMa4Jb-lq2wHpG2fkgWjnyk"

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;

