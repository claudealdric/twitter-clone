import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { AppBar, Grid, Typography } from '@material-ui/core'

import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'

import { RootState } from './store'
// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync,
// } from './slices/counter.slice'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter)
  const [sampleText, setSampleText] = useState('')

  useEffect(() => {
    const getHelloWorld = async () => {
      const url = process.env.REACT_APP_API_URL || 'http://localhost:8080'
      const { data } = await axios.get<string>(url)
      setSampleText(data)
    }

    getHelloWorld()
  }, [])

  return (
    <div>
      <AppBar position="static" style={{ marginBottom: 24 }}>
        <Typography variant="h6" style={{ padding: 12, textAlign: 'center' }}>
          Twitterbean
        </Typography>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/auth/login">
            <LoginPage />
          </Route>
          <Route path="/auth/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
      {/* <Routes /> */}
      {/* <p>API Response: {sampleText}</p>
      <p>Counter: {counter}</p>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch(incrementAsync())}>
        IncrementAsync
      </button>
      <button type="button" onClick={() => dispatch(decrementAsync())}>
        DecrementAsync
      </button> */}
    </div>
  )
}

export default App
