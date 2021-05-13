import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Profile from './pages/home/Profile'
import FeedPage from './pages/home/Feed'
import Login from './pages/auth/Login'
import Navbar from './components/shared/Navbar'
import Followers from './pages/home/Followers'
import Following from './pages/home/Following'
import Register from './pages/auth/Register'
import Test from './pages/Test'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/register">
            <Register />
          </Route>
          <Switch>
            <Route path="/home" exact>
              <Navbar />
              <FeedPage />
            </Route>
            <Route path="/profile">
              <Navbar />
              <Profile />
            </Route>
            <Route path="/followers">
              <Navbar />
              <Followers />
            </Route>
            <Route path="/following">
              <Navbar />
              <Following />
            </Route>
          </Switch>
        </Switch>
        <Route exact path="/">
          <Redirect to="/auth/login" />
        </Route>
      </Router>
    </div>
  )
}

export default App
