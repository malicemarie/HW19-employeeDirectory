import React, { Component } from "react";
import Header from "./header";
import Search from "./search";
import Results from "./Results";
import axios from "axios";

class Tracker extends Component {
  state = {
    persons: [],
    filteredPersons: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20").then(({ data }) => {
      const persons = data.results;
      this.setState({
        persons: persons,
        filteredPersons: persons
      });
    });
  }

  handleInputChange = event => {
    const searchInput = event.target.value;
    const filteredPersons = this.state.persons.filter(person => {
      let name = person.name.first.toLowerCase();
      console.log(typeof name);
      const matchPersons = name.indexOf(searchInput.toLowerCase()) !== -1;

      return matchPersons;
    });

    // Updating the input's state
    this.setState({
      filteredPersons: filteredPersons
    });
  };

  render() {
    return (
      <div>
        <Header /> <Search handleInputChange={this.handleInputChange} />
        <Results persons={this.state.filteredPersons} />
      </div>
    );
  }
}

export default Tracker;
