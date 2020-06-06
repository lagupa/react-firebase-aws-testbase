import React, { Component } from "react";
import firebase from "../firebase/config";

export class ListTutorial extends Component {
  state = {
    tutorialsRequests: [],
  };
  componentDidMount() {
    this.getTutorialRequest();
  }

  // Get tutorial request
  getTutorialRequest = () => {
    const ref = firebase
      .firestore()
      .collection("requests")
      .orderBy("upvotes", "desc");

    ref.onSnapshot((snapshot) => {
      let requests = [];
      snapshot.forEach((doc) => {
        requests.push({ ...doc.data(), id: doc.id });
      });

      this.setState({ tutorialsRequests: requests });
    });
  };

  // vote
  upvoteRequest = (id) => {
    //console.log(id);
    const upvote = firebase.functions().httpsCallable("upvote");
    upvote({ id }).catch((error) => {
      console.log(error);
      // showNotification(error.message);
    });
  };
  render() {
    const { tutorialsRequests } = this.state;
    return (
      <section className="content" id="app">
        <h1>Tutorial Requests</h1>
        <ul className="request-list">
          {tutorialsRequests.map((tut, i) => (
            <li key={i}>
              <span className="text">{tut.text}</span>
              <div>
                <span className="votes">{tut.upvotes}</span>
                <i className="material-icons upvote">arrow_upward</i>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ListTutorial;
