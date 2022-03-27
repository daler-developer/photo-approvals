import axios from 'axios'
import { UPSLASH_CLIENT_ID } from './contants'

const client = axios.create({})

client.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Client-ID eiE9Owq6tbc3n7eHEVjqzenNRAxZlm_2Kd6FreMegCc`

  return config
})

export default client
