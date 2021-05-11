import { Typography, Avatar } from '@material-ui/core'
import styles from './Profile.module.css'
import {
  RateReviewOutlined,
  PeopleOutline,
  PeopleAlt,
} from '@material-ui/icons'

const Profile: React.FC = () => {
  return (
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
            <Typography style={{ marginTop: '20px' }} component="h6">
              <RateReviewOutlined className={styles.icon} />
              Total tweets
            </Typography>
            <h1 className={styles.number}>350</h1>
          </span>
          <span className={styles.span}>
            <Typography style={{ marginTop: '20px' }} component="h6">
              <PeopleOutline className={styles.icon} />
              Followers
            </Typography>
            <h1 className={styles.number}>200</h1>
          </span>
          <span className={styles.span}>
            <Typography style={{ marginTop: '20px' }} component="h6">
              <PeopleAlt className={styles.icon} />
              Following
            </Typography>
            <h1 className={styles.number}>45</h1>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Profile
