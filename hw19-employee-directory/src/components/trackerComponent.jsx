import React, { Component } from "react";
import Header from "./header";
import Search from "./search";

class Tracker extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header /> <Search />
        <h3>This is going to compile the Page</h3>
      </div>
    );
  }
}

export default Tracker;
