import { Typography, Avatar } from '@material-ui/core'
import styles from './Profile.module.css'

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
        <Typography
          style={{ color: '#5b7083', marginLeft: '20px' }}
          component="h6"
        >
          Total tweets:
        </Typography>
      </div>
    </div>
  )
}

export default Profile
