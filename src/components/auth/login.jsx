import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import PropTypes from 'prop-types'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: ''
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(credentials)
  }

  render() {
    const { errors } = this.state

    return (
      <main className="form">
        <div className="content">
          <span className="button back-btn" onClick={() => this.props.history.goBack()}>
            Back
          </span>
          <h1>Login</h1>

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput}
                className={errors.email ? 'error' : null}
              />
              {errors.email && <small>{errors.email}</small>}
            </div>
            <div className="form-element">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput}
                className={errors.password ? 'error' : null}
              />
              {errors.password && <small>{errors.password}</small>}
            </div>
            <button>Submit</button>
          </form>
        </div>
      </main>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
