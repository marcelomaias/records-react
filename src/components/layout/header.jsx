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
      <div>
        <div className="user">
          Welcome <span>{user.name}</span>
        </div>
        <ul>
          <li>
            <Link to="/addAlbum">Add Album</Link>
          </li>
          <li>
            <a href="/" onClick={this.handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
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
              <Link className="logo" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.104 0-2-.897-2-2s.896-2 2-2 2 .897 2 2-.896 2-2 2zm0-12c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.914 20.526c-2.625-.902-4.697-2.978-5.592-5.606l1.02-.127c.807 2.174 2.529 3.901 4.699 4.714l-.127 1.019zm.258-2.054c-1.723-.71-3.098-2.085-3.807-3.807l1.041-.13c.596 1.272 1.623 2.299 2.895 2.896l-.129 1.041zm8.095-9.007c-.598-1.272-1.625-2.3-2.896-2.896l.131-1.041c1.721.71 3.096 2.085 3.807 3.807l-1.042.13zm2.049-.256c-.814-2.157-2.529-3.869-4.691-4.677l.129-1.019c2.613.896 4.68 2.958 5.582 5.568l-1.02.128z" />
                </svg>
                <span>
                  <em>Cool</em>Records
                </span>
              </Link>
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
