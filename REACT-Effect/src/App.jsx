import { useState, useEffect } from 'react'

export default function App() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (form.name && form.email) {
      setStatus('Ready to submit');
    } else {
      setStatus('Please fill out all fields');
    }
  }, [form]);

  return (
    <form onSubmit={(e) => { e.preventDefault(); alert('Submitted!') }}>
      <input 
        placeholder="Name" 
        value={form.name} 
        onChange={e => setForm({ ...form, name: e.target.value })} 
      />
      <input 
        placeholder="Email" 
        value={form.email} 
        onChange={e => setForm({ ...form, email: e.target.value })} 
      />
      <p>{status}</p>
      <button type="submit">Register</button>
    </form>
  )
}