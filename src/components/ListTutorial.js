import React, { Component } from "react";

export class ListTutorial extends Component {
  render() {
    return (
      <section className="content" id="app">
        <h1>Tutorial Requests</h1>
        <ul className="request-list">
          <li v-for="request in requests">
            <span className="text"> request.text</span>
            <div>
              <span className="votes">request.upvotes</span>
              <i className="material-icons upvote">arrow_upward</i>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default ListTutorial;
