import React from 'react'
import {
  FormControl,
  Grid,
  Input,
  Paper,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Avatar,
  TextField,
  Box,
} from '@material-ui/core'

import styles from './Feed.module.css'
import bean from 'images/feedbean.png'

const FeedPage: React.FC = () => {
  const window: any = global
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.interimResults = true
  const [inputValue, _setInputValue] = React.useState('')

  const capitalize = (string: any) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  const punctuate = (string: any) => {
    console.log('string -->', string)
    if (string.includes('?')) {
      return ' '
    } else if (string.includes('!')) {
      return ' '
    } else {
      return '. '
    }
  }

  const inputRef = React.useRef(inputValue)
  const setInputValue = (data: string) => {
    inputRef.current = data
    _setInputValue(data)
  }

  let status = 0

  const handleClick = () => {
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
        // setInputValue(inputRef.current + capitalize(transcript) + '. ')
        setInputValue(
          inputRef.current + capitalize(transcript) + punctuate(transcript)
        )
      }
      if (transcript.includes('clear')) {
        setInputValue('')
      }
      recognition.addEventListener('end', recognition.start)
    })
  }
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img className={styles.image} src={bean} alt="feed bean cartoon"></img>
        <div>
          <p className={styles.homeText}>Your tweet is voice activated!</p>
          <p className={styles.homeSubText}>
            If there is a mistake, simply say "clear" to start over 😊
          </p>
        </div>
      </div>
      <div className={styles.tweets}>
        <Grid item xs={11}>
          <Paper elevation={2}>
            <form>
              <FormControl fullWidth>
                <Input
                  className={styles.input}
                  id="tweet-input"
                  placeholder="Speak your thoughts here!"
                  onClick={handleClick}
                  value={inputValue}
                />
              </FormControl>
              <FormControl fullWidth>
                <Input
                  className={styles.input}
                  type="submit"
                  value="Tweet"
                ></Input>
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
          <div>
            <p className={styles.tweetsTitle}>Bean Feed</p>
            <React.Fragment>
              <Paper elevation={1} className={styles.tweetsBox}>
                <ListItem alignItems="flex-start">
                  <div className={styles.form}>
                    <ListItemAvatar>
                      <Avatar alt="avatar" src="https://picsum.photos/500" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography className={styles.userTweet}>
                          So excited to be here!
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            className={styles.username}
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            @billybill
                          </Typography>
                          {` - 4:00 PM`}
                        </>
                      }
                    />
                    <div className={styles.reply}>
                      <ListItemAvatar>
                        <Avatar alt="avatar" src="https://picsum.photos/500" />
                      </ListItemAvatar>
                      <form autoComplete="off">
                        <FormControl>
                          <Box width={350}>
                            <TextField
                              label="Reply here..."
                              fullWidth
                              multiline
                              InputLabelProps={{ style: { color: 'black' } }}
                            />
                          </Box>
                        </FormControl>
                      </form>
                    </div>
                  </div>
                </ListItem>
              </Paper>
              <Divider />
              <Paper elevation={1} className={styles.tweetsBox}>
                <ListItem alignItems="flex-start">
                  <div className={styles.form}>
                    <ListItemAvatar>
                      <Avatar alt="avatar" src="https://picsum.photos/500" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography className={styles.userTweet}>
                          Eating pasta for lunch!
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            className={styles.username}
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            @chefbob
                          </Typography>
                          {` - 3:00 PM`}
                        </>
                      }
                    />
                    <div className={styles.reply}>
                      <ListItemAvatar>
                        <Avatar alt="avatar" src="https://picsum.photos/500" />
                      </ListItemAvatar>
                      <form autoComplete="off">
                        <FormControl>
                          <Box width={350}>
                            <TextField
                              label="Reply here..."
                              fullWidth
                              multiline
                              InputLabelProps={{ style: { color: 'black' } }}
                            />
                          </Box>
                        </FormControl>
                      </form>
                    </div>
                  </div>
                </ListItem>
              </Paper>
            </React.Fragment>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default FeedPage
