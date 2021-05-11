import React from 'react'
import { FormControl, Grid, Input, Paper } from '@material-ui/core'

import styles from './Feed.module.css'

const FeedPage: React.FC = () => {
  const window: any = global
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.interimResults = true
  const [inputValue, _setInputValue] = React.useState('')
  // const [inputArray, setInputArray] = React.useState([]);
  // const inputValues: string[] = []

  const capitalize = (string: any) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  const inputRef = React.useRef(inputValue)
  const setInputValue = (data: string) => {
    inputRef.current = data
    _setInputValue(data)
  }

  let status = 0

  const handleClick = () => {
    console.log('status after handleClick ->', status)
    if (status === 1) {
      status = 0
      recognition.stop()
      return
    }
    status = 1
    recognition.start()
    recognition.addEventListener('result', (e) => {
      const transcript = e.results[0][0].transcript
      if (e.results[0].isFinal) {
        setInputValue(inputRef.current + capitalize(transcript) + '. ')
      }
      if (transcript.includes('clear')) {
        setInputValue('')
      }
      recognition.addEventListener('end', recognition.start)
    })
  }
  return (
    <div className={styles.root}>
      <Grid item xs={11}>
        <Paper elevation={2}>
          <form>
            <FormControl fullWidth>
              <Input
                id="tweet-input"
                placeholder="Speak your thoughts here!"
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
