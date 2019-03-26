import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
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
    axios
      .post('/users', newUser)
      .then(result => {
        console.log(result.data)
      })
      // SET THE ERRORS RESPONSE TO THE STATE
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    // GET THE ERRORS OBJECT FROM STATE
    const { errors } = this.state

    return (
      <div>
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-element">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInput}
              className={errors.name ? 'error' : null}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>
          <div className="form-element">
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
          <div className="form-element">
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Confirm Password"
              value={this.state.password2}
              onChange={this.handleInput}
              className={errors.password2 ? 'error' : null}
            />
            {errors.password2 && <small>{errors.password2}</small>}
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Register
