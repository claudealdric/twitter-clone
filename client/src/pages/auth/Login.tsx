import { Button, FormControl, Grid, Input } from '@material-ui/core'
import { Link } from 'react-router-dom'

import bean from 'images/bean.png'
import styles from './Login.module.css'

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={bean} alt="bean cartoon"></img>
      <div>
        <h2 className={styles.title}>How You Bean?</h2>
        <Grid>
          <Grid container>
            <Grid item xs={1}>
              {/* Empty grid for spacing */}
            </Grid>
            <Grid>
              <form>
                <FormControl fullWidth>
                  <Input id="handle" placeholder="Handle" />
                </FormControl>
                <FormControl fullWidth>
                  <Input type="password" id="password" placeholder="Password" />
                </FormControl>
                <FormControl fullWidth>
                  <Button
                    variant="contained"
                    color="primary"
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
