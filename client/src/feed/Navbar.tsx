import { AppBar, Grid, Typography } from '@material-ui/core'

export default function Navbar() {
  return (
    <AppBar position="static" style={{ marginBottom: 24 }}>
      <Typography variant="h6" style={{ padding: 12, textAlign: 'center' }}>
        Twitterbean
      </Typography>
    </AppBar>
  )
}
