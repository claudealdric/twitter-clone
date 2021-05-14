import { Button, FormControl, Grid, Input } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { verify } from 'jsonwebtoken'

import bean from 'images/bean.jpg'
import styles from './Login.module.css'
import { User } from 'interfaces'
import { authEndpoint } from 'api'
import { getUser } from 'data/slices/user.slice'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh
    event.preventDefault()

    try {
      // Submit form data to API
      const requestBody = { handle, password }
      const { data } = await authEndpoint.post<{ token: string }>(
        '/login',
        requestBody
      )

      // Store token in session storage
      sessionStorage.setItem('token', data.token)

      // Get user information from verified token
      const decoded = verify(
        data.token,
        process.env.REACT_APP_JWT_SECRET as string
      ) as User

      // Store user in Redux store
      dispatch(getUser(decoded.handle))

      // Trigger redirect using redirect state
      setRedirect(true)
    } catch (error) {}
  }

  if (redirect) {
    return <Redirect to="/home" />
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={bean} alt="bean cartoon"></img>
      <div>
        <p className={styles.title}>How You Bean?</p>
        <Grid>
          <Grid container>
            <Grid item xs={1}>
              {/* Empty grid for spacing */}
            </Grid>
            <Grid>
              <form onSubmit={onSubmit}>
                <FormControl fullWidth>
                  <Input
                    className={styles.input}
                    id="handle"
                    placeholder="Handle"
                    value={handle}
                    onChange={(event) => setHandle(event.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Input
                    className={styles.input}
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.button}
                  >
                    Log in
                  </Button>
                </FormControl>
              </form>

              <p className={styles.blurb}>
                Don't have an account? <Link to="/auth/register">Sign up</Link>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Login
