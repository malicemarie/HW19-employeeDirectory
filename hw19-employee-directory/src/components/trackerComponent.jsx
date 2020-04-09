import React, { Component } from "react";
import Header from "./header";
import Search from "./search";
import Results from "./resultsList";

class Tracker extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header /> <Search />
        <Results />
      </div>
    );
  }
}

export default Tracker;
