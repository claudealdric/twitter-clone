import { FormControl, Grid, Input } from '@material-ui/core'
import { Link } from 'react-router-dom'

import bean from '../images/bean.png'

export default function LandingPage() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    image: {
      width: 200,
      marginRight: 10,
    },
    signup: {
      textAlign: 'center',
    },
    title: {
      textAlign: 'center',
    },
  }
  return (
    <div style={styles.container}>
      <img style={styles.image} src={bean} alt="bean cartoon"></img>
      <div>
        <h1 style={styles.title}>How You Bean?</h1>
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
                  <Input type="submit" value="Login"></Input>
                </FormControl>
              </form>
              <h4 style={styles.signup}>
                Don't have an account? <Link to="/auth/register">Sign Up</Link>
              </h4>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
