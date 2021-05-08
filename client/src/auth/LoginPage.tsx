import { FormControl, Grid, Input } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <Grid item xs={4}>
      <Grid container>
        <Grid item xs={1}>
          {/* Empty grid for spacing */}
        </Grid>
        <Grid item xs={4}>
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
          Don't have an account? <Link to="/auth/register">Sign Up</Link>.
        </Grid>
      </Grid>
    </Grid>
  )
}
