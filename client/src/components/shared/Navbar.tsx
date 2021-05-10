import React from 'react'
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

const Navbar: React.FC = () => {
  const classes = useStyles()
  const menuId = 'primary-search-account-menu'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: '#71c783' }}>
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
            <IconButton
              aria-label="dropdown"
              aria-controls="dropdown-menu"
              onClick={handleClick}
            >
              <ArrowDropDown />
            </IconButton>
            <Menu
              id="dropdown-menu"
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              keepMounted
            >
              <MenuItem value={10} onClick={handleClose}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
