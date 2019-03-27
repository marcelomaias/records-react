import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions/authActions'
import PropTypes from 'prop-types'

class Header extends Component {
  state = {}

  handleLogout = e => {
    e.preventDefault()
    this.props.logOut()
  }
  render() {
    const { isAuthenticated, user } = this.props.auth

    const authLinks = (
      <ul>
        <li>
          <a href="/" onClick={this.handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    )

    return (
      <header>
        {isAuthenticated ? <div>Hello {user.name}</div> : null}
        <nav>{isAuthenticated ? authLinks : guestLinks}</nav>
      </header>
    )
  }
}

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logOut }
)(Header)
