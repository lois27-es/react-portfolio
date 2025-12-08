import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nuwkokwzbclcmgmtbwaj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51d2tva3d6YmNsY21nbXRid2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxNjg4MzAsImV4cCI6MjA4MDc0NDgzMH0.Rn98CC0xZEEljc9aKzK48__5uc4rRfxFGLNVlRVyvuo'

export const supabase = createClient(supabaseUrl, supabaseKey)