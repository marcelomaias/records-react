import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './pages/home'
import About from './pages/about'
import Login from './components/auth/login'
import Register from './components/auth/register'

import './app.scss'

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App
