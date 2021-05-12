import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'

const Following: React.FC = () => {
  return (
    <div>
      <Grid item xs={2}>
        <Paper elevation={1}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="avatar" src="https://picsum.photos/500" />
              </ListItemAvatar>
              <ListItemText primary="@mochipie" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </div>
  )
}

export default Following
