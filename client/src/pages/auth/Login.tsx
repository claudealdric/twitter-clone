import { Button, FormControl, Grid, Input } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import bean from 'images/bean.jpg'
import styles from './Login.module.css'

const Login: React.FC = () => {
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh
    event.preventDefault()

    console.table({ handle, password })
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
