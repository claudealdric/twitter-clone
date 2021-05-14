import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FeedPage from './pages/home/Feed'
import Followers from './pages/home/Followers'
import Following from './pages/home/Following'
import Login from './pages/auth/Login'
import Navbar from './components/shared/Navbar'
import Profile from './pages/home/Profile'
import Register from './pages/auth/Register'
import history from 'utils/history'
import { RootState } from 'data/store'

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)
  const loggedIn = () => Boolean(user.user.handle)

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
