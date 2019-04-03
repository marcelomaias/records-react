import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import PropTypes from 'prop-types'

import BackButton from '../../components/ui/back-button'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    // GET THE ERRORS OBJECT FROM STATE
    const { errors } = this.state

    return (
      <main className="form">
        <div className="content">
          <BackButton click={this.props.history.goBack} />
          <h1>Register</h1>

          <form onSubmit={this.handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <div className="form-element">
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInput}
                className={errors.name ? 'error' : null}
              />
              {errors.name && <small>{errors.name}</small>}
            </div>
            <div className="form-element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
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
                value={this.state.password}
                onChange={this.handleInput}
                className={errors.password ? 'error' : null}
              />
              {errors.password && <small>{errors.password}</small>}
            </div>
            <div className="form-element">
              <label htmlFor="password2">Confirm password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                value={this.state.password2}
                onChange={this.handleInput}
                className={errors.password2 ? 'error' : null}
              />
              {errors.password2 && <small>{errors.password2}</small>}
            </div>
            <button>Submit</button>
          </form>
        </div>
      </main>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
