import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Grid,
  Box,
} from '@material-ui/core'

const FeedPage: React.FC = () => {
  return (
    <Grid item xs={10}>
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
  )
}

export default FeedPage
