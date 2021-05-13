import {
  Grid,
  Paper,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'

import styles from './Followers.module.css'

const Followers: React.FC = () => {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>Followers</p>
      <Grid container className={styles.listContainer}>
        <Grid className={styles.grid} item>
          <Paper elevation={1}>
            <ListItem className={styles.listItem}>
              <ListItemAvatar>
                <Avatar alt="avatar" src="https://picsum.photos/500" />
              </ListItemAvatar>
              <ListItemText primary="@bobbybeans" />
            </ListItem>
          </Paper>
        </Grid>
        <Grid className={styles.grid} item>
          <Paper elevation={1}>
            <ListItem className={styles.listItem}>
              <ListItemAvatar>
                <Avatar alt="avatar" src="https://picsum.photos/500" />
              </ListItemAvatar>
              <ListItemText primary="@billybill" />
            </ListItem>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Followers
