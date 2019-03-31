import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions/authActions'
import PropTypes from 'prop-types'

class Header extends Component {
  state = {}

  handleLogout = e => {
    e.preventDefault()
    this.props.logOut(this.props.history)
  }
  render() {
    const { isAuthenticated, user } = this.props.auth

    const authLinks = (
      <ul>
        <li className="user">{user.name}:</li>
        <li>
          <Link to="/addAlbum">Add Album</Link>
        </li>
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
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
)(withRouter(Header))
