import axios from 'axios'

const client = axios.create({})

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token')

  if (token) {
    config.headers['Authorization'] = 'Client-ID 5jn9QwTzrDkZXlXb6aXC1UQ5xQKFWzt2fKLEKkrBnl0'
  }

  return config
})

export default client
