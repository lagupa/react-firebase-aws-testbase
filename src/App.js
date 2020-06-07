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
    error: "",
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
  closeRequestModal = () => {
    console.log("closing request modal");
    // close the request modal
    this.setState({
      openReqModal: false,
    });
  };
  // vote
  upvoteRequest = (id) => {
    console.log(id);
    const upvote = firebase.functions().httpsCallable("upvote");
    upvote({ id }).catch((error) => {
      console.log(error);
      this.showNotification(error.message);
    });
  };

  // notification
  // const notification = document.querySelector(".notification");

  showNotification = (message) => {
    this.setState({
      error: message,
    });
    setTimeout(() => {
      // notification.classList.remove("active");
      this.setState({
        error: "",
      });
    }, 4000);
  };

  render() {
    const { error } = this.state;
    // console.log(this.state.loginStatus);

    return (
      <div className="App">
        <div className={error ? "notification active" : "notification"}>
          {this.state.error}
        </div>

        <Auth logInUser={this.state.loginStatus} />
        <Request
          openReqModal={this.state.openReqModal}
          closeRequestModal={this.closeRequestModal}
        />
        <Header
          openRequestModal={this.openRequestModal}
          logOut={this.signOut}
        />
        <ListTutorial upvoteRequest={this.upvoteRequest} />
      </div>
    );
  }
}

export default App;
