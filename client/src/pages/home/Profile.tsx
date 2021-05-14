import { Link } from 'react-router-dom'
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import {
  PeopleAlt,
  PeopleOutline,
  RateReviewOutlined,
} from '@material-ui/icons'

import styles from './Profile.module.css'
import { RootState } from 'data/store'
import { useSelector } from 'react-redux'

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <div>
      <div className={styles.root}>
        <Avatar
          className={styles.avatar}
          alt="Bob"
          src="https://picsum.photos/500"
        />
        <div className={styles.header}>
          <h1 className={styles.username}>@{user.user.handle}</h1>
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
                <>
                  <Typography className={styles.tweet} color="textPrimary">
                    @{user.user.handle}
                  </Typography>
                </>
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
