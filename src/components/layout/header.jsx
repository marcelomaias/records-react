import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {}
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
