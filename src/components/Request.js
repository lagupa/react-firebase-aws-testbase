import React, { Component } from "react";
import firebase from "../firebase/config";

class Request extends Component {
  state = {
    request: "",
    error: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // save the request data
    const { request } = this.state;
    firebase
      .functions()
      .httpsCallable("addRequest", { text: request })
      .then(() => {
        // requestForm.reset();
        // requestForm.querySelector(".error").textContent = "";
        this.setState({
          request: "",
          error: "",
        });
        // requestModal.classList.remove("open");
        this.props.closeRequestModal();
      })
      .catch((error) => {
        if (error.message === "INTERNAL") {
          // requestForm.reset();
          this.setState({
            request: "",
            error: "",
          });

          // requestModal.classList.remove("open");
          this.props.closeRequestModal();
        } else {
          // requestForm.querySelector(".error").textContent = error.message;
          this.setState({ error: error.message });
        }
      });
  };

  render() {
    return (
      <div
        className={this.props.openReqModal ? "new-request open" : "new-request"}
      >
        {/* new request modal */}
        <div className="modal">
          <h2>Request a Tutorial</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              value={this.state.request}
              onChange={this.handleOnChange}
              type="text"
              name="request"
              placeholder="Request..."
            />
            <button>Submit Request</button>{" "}
            <button onClick={(e) => this.props.closeRequestModal(e)}>
              Cancel
            </button>
            <p className="error">{this.state.error}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Request;
