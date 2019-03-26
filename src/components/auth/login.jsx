import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: ''
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
    console.log(credentials)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-element">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-element">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
