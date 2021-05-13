import {
  Grid,
  Paper,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'

import styles from './Following.module.css'

const Following: React.FC = () => {
  return (
    <div className={styles.root}>
      <p className={styles.heading}>Following</p>
      <Grid container className={styles.listContainer}>
        <Grid className={styles.grid} item>
          <Paper elevation={1}>
            <ListItem className={styles.listItem}>
              <ListItemAvatar>
                <Avatar alt="avatar" src="https://picsum.photos/500" />
              </ListItemAvatar>
              <ListItemText primary="@mochipie" />
            </ListItem>
          </Paper>
        </Grid>
        <Grid className={styles.grid} item>
          <Paper elevation={1}>
            <ListItem className={styles.listItem}>
              <ListItemAvatar>
                <Avatar alt="avatar" src="https://picsum.photos/500" />
              </ListItemAvatar>
              <ListItemText primary="@starberry" />
            </ListItem>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Following
