import axios from 'axios'

const apiBaseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080'

export const usersEndpoint = axios.create({
  baseURL: `${apiBaseURL}/users`,
})
