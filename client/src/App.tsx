import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'

import FeedPage from './feed/FeedPage'
import Navbar from './feed/Navbar'

import LandingPage from './LandingPage'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/auth/login">
            <LoginPage />
          </Route>
          <Route path="/auth/register">
            <RegisterPage />
          </Route>
          <Switch>
            <Route path="/home" exact>
              <Navbar />
              <FeedPage />
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
