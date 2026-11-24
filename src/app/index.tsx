import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Auth from '@/components/Auth'
import Account from '@/components/Account'
import { View } from 'react-native'

export default function App() {
  const [userId, setUserId] = useState<string | null>(null)
  const [email, setEmail] = useState<string | undefined>(undefined)

useEffect(() => {
  supabase.auth.getClaims().then(({ data }) => {
    const claims = data?.claims
    setUserId(claims?.sub ?? null)
    setEmail(claims?.email ?? null)
  })

  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    setUserId(session?.user.id ?? null)
    setEmail(session?.user.email ?? null)
  })

  return () => subscription.unsubscribe()
}, [])

  return <View>{userId ? <Account key={userId} userId={userId} email={email} /> : <Auth />}</View>
}