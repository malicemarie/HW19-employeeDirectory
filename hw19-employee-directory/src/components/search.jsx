import React, { Component } from "react";
import "../styles/search.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="search-bar">
          <label for="dob">DOB</label>
          <input type="date" id="dob" name="dob"></input>
          <input type="date" id="enddate" name="enddate"></input>
          <input type="text" placeholder="Search here"></input>
        </div>
      </div>
    );
  }
}

export default Search;
