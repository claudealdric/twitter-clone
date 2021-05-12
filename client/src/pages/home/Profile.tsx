import React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  Avatar,
  Button,
  List,
  ListItemText,
  ListItemAvatar,
  ListItem,
  Divider,
} from '@material-ui/core'
import styles from './Profile.module.css'
import {
  RateReviewOutlined,
  PeopleOutline,
  PeopleAlt,
} from '@material-ui/icons'

const Profile: React.FC = () => {
  return (
    <div>
      <div className={styles.root}>
        <Avatar
          className={styles.avatar}
          alt="Bob"
          src="https://picsum.photos/500"
        />
        <div className={styles.header}>
          <h1 className={styles.username}>@beanadmin</h1>
          <div className={styles.stats}>
            <span className={styles.span}>
              <Typography className={styles.heading}>
                <RateReviewOutlined className={styles.icon} />
                Total tweets
              </Typography>
              <h1 className={styles.number}>350</h1>
            </span>
            <span className={styles.span}>
              <Link to="/followers" className={styles.link}>
                <Typography className={styles.heading}>
                  <PeopleOutline className={styles.icon} />
                  Followers
                </Typography>
                <h1 className={styles.number}>200</h1>
              </Link>
            </span>
            <span className={styles.span}>
              <Link to="/following" className={styles.link}>
                <Typography className={styles.heading}>
                  <PeopleAlt className={styles.icon} />
                  Following
                </Typography>
                <h1 className={styles.number}>45</h1>
              </Link>
            </span>
          </div>
          <Button className={styles.button} variant="contained">
            Follow
          </Button>
        </div>
      </div>
      <div className={styles.list}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                className={styles.tweetAvatar}
                alt="Bob"
                src="https://picsum.photos/500"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className={styles.tweetText}>
                  This is my first tweet.
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography className={styles.tweet} color="textPrimary">
                    @beanadmin
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </div>
    </div>
  )
}

export default Profile
