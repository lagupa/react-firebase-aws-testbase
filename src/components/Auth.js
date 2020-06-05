import React, { Component } from "react";

export default class Auth extends Component {
  state = {
    email: "",
    password: "",
  };

  authSwitchLinks = (e) => {
    console.log("switching");
    this.setState({
      open: !this.state.open,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleContactUs = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const data = {
      email,
      password,
    };
    console.log(data);
  };

  registerForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    console.log("Registration data: ");
    console.log(data);
  };
  loginForm = (e) => {
    e.preventDefault();
    // login user here
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    console.log("Login data: ");
    console.log(data);
  };

  render() {
    const { open, email, password } = this.state;
    // console.log(email, password);

    return (
      <div className="auth open">
        {/* auth modals */}
        <div className={open ? "modal" : "modal active"}>
          <h2>Login</h2>
          <form onSubmit={(e) => this.loginForm(e)} className="login">
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              // value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              // value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
            <button>Login</button>
            <p className="error"></p>
          </form>

          <div>
            No account?{" "}
            <a onClick={this.authSwitchLinks} className="switch">
              Register instead
            </a>
          </div>
        </div>

        <div className={open ? "modal active" : "modal"}>
          <h2>Register</h2>

          <form onSubmit={(e) => this.registerForm(e)} className="login">
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              // value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              // value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
            <button>Register</button>
            <p className="error"></p>
          </form>
          <div>
            Got an account?{" "}
            <a onClick={this.authSwitchLinks} className="switch">
              Login instead
            </a>
          </div>
        </div>
      </div>
    );
  }
}
