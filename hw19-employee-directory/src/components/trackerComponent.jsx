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
      this.setState({ persons: persons });
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Header /> <Search handleInputChange={this.handleInputChange} />
        <Results persons={this.state.persons} />
      </div>
    );
  }
}

export default Tracker;
