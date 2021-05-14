import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core'
import {
  AccountCircle,
  ArrowDropDown,
  Home,
  Notifications,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import styles from './Navbar.module.css'

const useStyles = makeStyles(() => ({
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
  home: {
    '& svg': {
      fontSize: 30,
    },
  },
}))

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()

  const menuId = 'primary-search-account-menu'
  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: any) => {
    setAnchorEl(null)

    if (event.target.id === 'logout') {
      sessionStorage.removeItem('token')
    }
  }
  return (
    <div className={styles.container}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar>
          <div className={styles.sectionDesktop}>
            <IconButton
              className={classes.notif}
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <Link to="/home" className={styles.link}>
              <IconButton
                className={classes.home}
                aria-label="home"
                aria-haspopup="true"
                color="inherit"
              >
                <Home />
              </IconButton>
            </Link>
            <Link to="/profile" className={styles.link}>
              <IconButton
                className={classes.profile}
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
              <Link to="/followers" className={styles.dropdown}>
                <MenuItem value={10} onClick={handleClose}>
                  Followers
                </MenuItem>
              </Link>
              <Link to="/following" className={styles.dropdown}>
                <MenuItem value={10} onClick={handleClose}>
                  Following
                </MenuItem>
              </Link>
              <MenuItem value={10} onClick={handleClose} id="logout">
                Log out
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
