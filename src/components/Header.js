import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <button
            onClick={() => this.props.openRequestModal()}
            className="add-request"
          >
            add request
          </button>{" "}
          <button onClick={() => this.props.logOut()} className="sign-out">
            sign out
          </button>
        </nav>
      </header>
    );
  }
}

export default Header;
