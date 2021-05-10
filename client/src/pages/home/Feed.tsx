import React from 'react'
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
  const window: any = global
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.interimResults = true
  const [inputValue, setInputValue] = React.useState('')

  const handleClick = () => {
    recognition.start()
    recognition.addEventListener('result', (e) => {
      const transcript = e.results[0][0].transcript
      setInputValue(transcript)
      if (e.results[0].isFinal) {
        setInputValue((prev) => prev + '. ')
      }
    })
    recognition.addEventListener('end', recognition.start)
  }

  return (
    <div className={styles.root}>
      <Grid item xs={11}>
        <Paper elevation={2}>
          <form>
            <FormControl fullWidth>
              <Input
                id="tweet-input"
                placeholder="What's happening?"
                onClick={handleClick}
                value={inputValue}
              />
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
