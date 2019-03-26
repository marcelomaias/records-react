import React, { Component } from 'react'

class Register extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Register</h1>

        <form action="">
          <div className="form-element">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="form-element">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="form-element">
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <div className="form-element">
            <input type="password" name="password2" id="password2" placeholder="Confirm Password" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Register
