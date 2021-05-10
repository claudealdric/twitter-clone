import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
  id: string
  name: string
  email: string
  password: string
}

const Test: React.FC = () => {
  const [apiResponse, setApiResponse] = useState('')
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const apiBaseUrl = 'http://localhost:8080'
    const getApiResponse = async (): Promise<void> => {
      const { data } = await axios.get<string>(apiBaseUrl)
      setApiResponse(data)
    }

    const getUsers = async (): Promise<void> => {
      const { data } = await axios.get<User[]>(`${apiBaseUrl}/users`)
      setUsers(data)
    }

    getApiResponse()
    getUsers()
  }, [])

  return (
    <div>
      <p>API Response: {apiResponse}</p>
      <p>Users</p>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Test
