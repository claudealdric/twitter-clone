import { Router, Redirect, Route, Switch } from 'react-router-dom'

import FeedPage from './pages/home/Feed'
import Followers from './pages/home/Followers'
import Following from './pages/home/Following'
import Login from './pages/auth/Login'
import Navbar from './components/shared/Navbar'
import Profile from './pages/home/Profile'
import Register from './pages/auth/Register'
import history from 'utils/history'

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth/login" />
        </Route>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/followers" component={Followers} />
        <Route exact path="/following" component={Following} />
        <Route exact path="/home" component={FeedPage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
}

export default App
