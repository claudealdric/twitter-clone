import { Button, FormControl, Grid, Input } from '@material-ui/core'
import { useState } from 'react'

import bean from 'images/bean.jpg'
import styles from './Register.module.css'
import { Link } from 'react-router-dom'
import { usersEndpoint } from 'api'

const Register: React.FC = () => {
  const [fullName, setFullName] = useState('')
  const [handle, setHandle] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh
    event.preventDefault()

    // Call API endpoint to create new user
    const data = { fullName, handle, email, password }
    usersEndpoint.post('/', data)
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
              <div className={styles.inputBox}>
                <form onSubmit={(event) => onSubmit(event)}>
                  <FormControl className={styles.form}>
                    <Input
                      className={styles.input}
                      id="fullName"
                      type="text"
                      placeholder="Name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </FormControl>

                  <FormControl className={styles.form}>
                    <Input
                      className={styles.input}
                      id="handle"
                      type="text"
                      placeholder="Handle"
                      value={handle}
                      onChange={(event) => setHandle(event.target.value)}
                    />
                  </FormControl>

                  <FormControl className={styles.form}>
                    <Input
                      className={styles.input}
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormControl>

                  <FormControl className={styles.form}>
                    <Input
                      className={styles.input}
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </FormControl>

                  <FormControl className={styles.form}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={styles.button}
                    >
                      Sign up
                    </Button>
                  </FormControl>
                </form>
              </div>
              <p className={styles.blurb}>
                Already have an account? <Link to="/auth/login">Log in</Link>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Register
