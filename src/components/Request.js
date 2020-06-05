import React, { Component } from "react";

class Request extends Component {
  render() {
    return (
      <div className="new-request">
        {/* new request modal */}
        <div className="modal">
          <h2>Request a Tutorial</h2>
          <form>
            <input type="text" name="request" placeholder="Request..." />
            <button>Submit Request</button>
            <p className="error"></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Request;
