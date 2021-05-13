import axios from 'axios'

const apiBaseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080'

export const authEndpoint = axios.create({
  baseURL: `${apiBaseURL}/auth`,
})

export const usersEndpoint = axios.create({
  baseURL: `${apiBaseURL}/users`,
})
