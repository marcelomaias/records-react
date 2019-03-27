import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './pages/home'
import About from './pages/about'
import Login from './components/auth/login'
import Register from './components/auth/register'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utilities/setAuthToken'
import { setCurrentUser, logOut } from './actions/authActions'

import './app.scss'

// IF TOKEN IN LOCALSTORAGE, SET AUTHENTICATED: TRUE, AND USER
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decodedToken = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decodedToken))

  // CHECK FOR EXPIRED TOKEN
  const currentTime = Date.now() / 1000
  if (decodedToken.exp < currentTime) {
    store.dispatch(logOut())
    window.location.href = '/login'
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
