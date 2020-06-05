import React, { Component } from "react";

export default class Auth extends Component {
  state = {
    open: false,
  };
  authSwitchLinks = (e) => {
    console.log("switching");
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    const { open } = this.state;
    console.log(open);
    return (
      <div className="auth open">
        {/* auth modals */}
        <div className={open ? "modal" : "modal active"}>
          <h2>Login</h2>
          <form className="login">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
            <p className="error"></p>
          </form>
          <div>
            No account?
            <a onClick={this.authSwitchLinks} className="switch">
              Register instead
            </a>
          </div>
        </div>

        <div className={open ? "modal active" : "modal"}>
          <h2>Register</h2>
          <form className="register">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Register</button>
            <p className="error"></p>
          </form>
          <div>
            Got an account?
            <a onClick={this.authSwitchLinks} className="switch">
              Login instead
            </a>
          </div>
        </div>
      </div>
    );
  }
}
