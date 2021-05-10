import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { AccountCircle, ArrowDropDown, Notifications } from '@material-ui/icons'
import { fade, makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'flex',
    marginLeft: 'auto',
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const menuId = 'primary-search-account-menu'
  //   const renderMenu = <Menu></Menu>
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton aria-label="dropdown">
              <ArrowDropDown />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* {renderMenu} */}
    </div>
  )
  //   return (
  //     <AppBar position="static" style={{ marginBottom: 24 }}>
  //       <Typography variant="h6" style={{ padding: 12, textAlign: 'center' }}>
  //         Twitterbean
  //       </Typography>
  //     </AppBar>
  //   )
}

export default Navbar
