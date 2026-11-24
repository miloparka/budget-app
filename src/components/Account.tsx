import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { supabase } from '@/lib/supabase'

export default function Account({ email }: { userId: string; email?: string | null }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Logged in as</Text>
      <Text style={styles.email}>{email ?? ''}</Text>

      <TouchableOpacity style={styles.button} onPress={() => supabase.auth.signOut()}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 60,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  email: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})