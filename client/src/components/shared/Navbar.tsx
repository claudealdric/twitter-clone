import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Badge,
  IconButton,
  MenuItem,
  Toolbar,
  Menu,
} from '@material-ui/core'
import { AccountCircle, ArrowDropDown, Notifications } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'flex',
    marginLeft: 'auto',
  },
  notif: {
    '& svg': {
      fontSize: 30,
    },
  },
  profile: {
    '& svg': {
      fontSize: 30,
    },
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
            <IconButton
              className={classes.notif}
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <Link
              to="/profile"
              style={{ color: '#FFF', textDecoration: 'none' }}
            >
              <IconButton
<<<<<<< HEAD
                className={classes.profile}
=======
>>>>>>> 30a10c72df294ecf70ce65b82f5056574128dde8
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
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
              <Link
                to="/home"
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <MenuItem value={10} onClick={handleClose}>
                  Home
                </MenuItem>
              </Link>
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
