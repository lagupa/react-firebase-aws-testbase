import React, { Component } from "react";

export default class Auth extends Component {
  render() {
    return (
      <div className="auth open">
        {/* auth modals */}
        <div className="modal">
          <h2>Login</h2>
          <form className="login">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
            <p className="error"></p>
          </form>
          <div>
            No account? <a className="switch">Register instead</a>
          </div>
        </div>
        <div className="modal">
          <h2>Register</h2>
          <form className="register">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Register</button>
            <p className="error"></p>
          </form>
          <div>
            Got an account? <a className="switch">Login instead</a>
          </div>
        </div>
      </div>
    );
  }
}
