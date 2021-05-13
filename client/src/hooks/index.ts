import { useEffect, useState } from 'react'
import { User } from 'interfaces'
import { verify } from 'jsonwebtoken'

export const useUser = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const token = sessionStorage.getItem('token')

    if (token) {
      try {
        const decoded = verify(
          token,
          process.env.REACT_APP_JWT_SECRET as string
        ) as User

        setUser(decoded)
      } catch (error) {}
    }
  }, [])

  return user
}
