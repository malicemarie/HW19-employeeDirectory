import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-title">
          {" "}
          <h2>Employee Directory</h2>
          <p>Click search here to narrow your results.</p>
        </div>
      </header>
    );
  }
}

export default Header;
