import React, { Component } from "react";
import firebase from "./firebase/config";
import Auth from "./components/Auth";
import Request from "./components/Request";
import Header from "./components/Header";
import ListTutorial from "./components/ListTutorial";
import "./App.css";

class App extends Component {
  state = {
    loginStatus: false,
    openReqModal: false,
  };
  componentDidMount() {
    this.authWatch();
  }

  // login controler
  authWatch = () => {
    console.log("Auth Watch...");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loginStatus: user,
        });
        console.log("a user is logged in", user);
      } else {
        // return false;
        this.setState({
          loginStatus: false,
        });
        console.log("No user login");
      }
    });
  };
  // Sign Out a user
  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out");
        // this.authWatch();
      });
  };
  openRequestModal = () => {
    console.log("opening request modal");
    this.setState({
      openReqModal: true,
    });
  };
  closeRequestModal = (e) => {
    e.preventDefault();
    console.log("closing request modal");
    // close the request modal
    this.setState({
      openReqModal: false,
    });
  };
  render() {
    // console.log(this.state.loginStatus);

    return (
      <div className="App">
        <Auth logInUser={this.state.loginStatus} />
        <Request
          openReqModal={this.state.openReqModal}
          closeRequestModal={this.closeRequestModal}
        />
        <Header
          openRequestModal={this.openRequestModal}
          logOut={this.signOut}
        />
        <ListTutorial />
      </div>
    );
  }
}

export default App;
