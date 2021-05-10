import axios from 'axios'

const apiBaseURL = process.env.API_BASE_URL || 'http://localhost:8080'

export const usersEndpoint = axios.create({
  baseURL: `${apiBaseURL}/users`,
})
