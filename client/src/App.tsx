import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { verify } from 'jsonwebtoken'

import FeedPage from './pages/home/Feed'
import Followers from './pages/home/Followers'
import Following from './pages/home/Following'
import Login from './pages/auth/Login'
import Navbar from './components/shared/Navbar'
import Profile from './pages/home/Profile'
import Register from './pages/auth/Register'
import history from 'utils/history'
import { RootState } from 'data/store'
import { User } from 'interfaces'
import { setUser } from 'data/slices/user.slice'
import { usersEndpoint } from 'api'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const loggedIn = () => Boolean(sessionStorage.getItem('token'))

  useEffect(() => {
    const getUser = async () => {
      const token = sessionStorage.getItem('token')

      if (token && user.user.handle === '') {
        // Get user information from verified token
        const decoded = verify(
          token,
          process.env.REACT_APP_JWT_SECRET as string
        ) as Pick<User, 'handle'>

        const { data } = await usersEndpoint.get<User>(`/${decoded.handle}`)
        dispatch(setUser(data.handle))
      }
    }

    getUser()
  }, [dispatch, user.user.handle])

  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        {/* Non-protected routes */}
        <Route exact path="/">
          <Redirect to="/auth/login" />
        </Route>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/home" component={FeedPage} />

        {/* Protected routes  */}
        <Route exact path="/followers">
          {loggedIn() ? <Followers /> : <Redirect to="/auth/login" />}
        </Route>
        <Route exact path="/following">
          {loggedIn() ? <Following /> : <Redirect to="/auth/login" />}
        </Route>
        <Route exact path="/profile">
          {loggedIn() ? <Profile /> : <Redirect to="/auth/login" />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
