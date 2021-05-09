import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import FeedPage from './feed/FeedPage'
import LoginPage from './auth/LoginPage'
import Navbar from './feed/Navbar'
import RegisterPage from './auth/RegisterPage'

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
