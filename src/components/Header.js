import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <a className="add-request">add request</a>
          <a className="sign-out">sign out</a>
        </nav>
      </header>
    );
  }
}

export default Header;
