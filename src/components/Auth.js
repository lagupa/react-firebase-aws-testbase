import React, { Component } from "react";
import firebase from "../firebase/config";

export default class Auth extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    // loginStatus: false,
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

  registerForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("registered", user);
        // reset form
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        // registerForm.querySelector(".error").textContent = error.message;
        this.setState({
          error: error.message,
        });
      });
  };
  loginForm = (e) => {
    e.preventDefault();
    // login user here
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("logged in", user);
        // remove the authWrapper
        this.setState({
          loginStatus: user,
        });

        // reset form fields
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        // loginForm.querySelector(".error").textContent = error.message;
        console.log(error);
        this.setState({
          error: error.message,
        });
      });
  };

  render() {
    const { open, error } = this.state;

    return (
      <div className={this.props.logInUser ? "auth" : "auth open"}>
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
            <p className="error">{error ? error : null}</p>
          </form>

          <div>
            No account?{" "}
            <button onClick={this.authSwitchLinks} className="switch">
              Register instead
            </button>
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
            <p className="error">{error ? error : null}</p>
          </form>
          <div>
            Got an account?
            <button onClick={this.authSwitchLinks} className="switch">
              Login instead
            </button>
          </div>
        </div>
      </div>
    );
  }
}
