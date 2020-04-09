import React, { Component } from "react";
import "../styles/resultsList.css";

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        {" "}
        <div className="results-table">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">INSERT IMAGE HERE</th>
                <td>NAME HERE</td>
                <td>PHNE HERE</td>
                <td>EMAIL HERE</td>
                <td>DOB HERE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Results;
