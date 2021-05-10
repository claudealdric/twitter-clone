import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
} from '@material-ui/core'

import styles from './Feed.module.css'

const FeedPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <Grid item xs={11}>
        <Paper elevation={2}>
          <form>
            <FormControl fullWidth>
              <Input id="tweet-input" placeholder="What's happening?" />
            </FormControl>
            <FormControl fullWidth>
              <Input type="submit" value="Tweet"></Input>
            </FormControl>
          </form>
        </Paper>
        {/* {tweets.map((tweet) => (
        <Box key={tweet._id} padding={1}>
          <Paper elevation={1}>
            <Box padding={1}>@{tweet.user.handle}</Box>
            <Box padding={1}>{tweet.text}</Box>
          </Paper>
        </Box>
      ))} */}
      </Grid>
    </div>
  )
}

export default FeedPage
