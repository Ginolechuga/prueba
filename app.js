import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://fysgndnzudqhcfzmjqxn.supabase.co'
const supabaseKey = ''
const supabase = createClient(supabaseUrl, supabaseKey)

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault()
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5c2duZG56dWRxaGNmem1qcXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNzgwNTksImV4cCI6MjA2MDg1NDA1OX0.aE5okasKS5byVVDzRtRUhBxncIlpf00QG7H8HL8Jm7s
  const nombre = document.getElementById('nombre').value
  const correo = document.getElementById('correo').value

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nombre, correo }])

  const mensaje = document.getElementById('mensaje')
  if (error) {
    mensaje.textContent = 'Error al guardar 😢'
  } else {
    mensaje.textContent = 'Datos guardados correctamente ✅'
    document.getElementById('form').reset()
  }
})
