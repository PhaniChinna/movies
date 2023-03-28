import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginForm'
import PopularRoute from './components/PopularForm'
import HomePage from './components/HomeForm'
import ProtectedRoute from './components/ProtuctedForm'
import AccountRoute from './components/AccountForm'
import NotFoundRoute from './components/NotFoundForm'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={HomePage} />
    <ProtectedRoute exact path="/popular" component={PopularRoute} />
    <ProtectedRoute exact path="/account" component={AccountRoute} />
    <Route path="/not-found" component={NotFoundRoute} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
