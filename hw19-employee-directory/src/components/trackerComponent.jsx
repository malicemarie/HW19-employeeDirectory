import React, { Component } from "react";
import Header from "./header";
import Search from "./search";
import Results from "./Results";
import axios from "axios";

class Tracker extends Component {
  state = { persons: [] };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10").then(({ data }) => {
      const persons = data.results;
      console.log("before set state", persons);
      this.setState({ persons: persons });
    });
  }

  render() {
    console.log("this.state.persons", this.state.persons);
    return (
      <div>
        <Header /> <Search />
        <Results persons={this.state.persons} />
      </div>
    );
  }
}

export default Tracker;
