import axios from 'axios'
import { UPSLASH_CLIENT_ID } from './contants'

const client = axios.create({})

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token')

  if (token) {
    config.headers['Authorization'] = `Client-ID ${UPSLASH_CLIENT_ID}`
  }

  return config
})

export default client
