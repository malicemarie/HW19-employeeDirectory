import React, { Component } from "react";
import "../styles/resultsList.css";
import axios from "axios";
import Col from "./col";
import Row from "./row";
import Search from "./search";

class Results extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
      console.log(persons);
    });
  }

  render() {
    return (
      <div className="container">
        {" "}
        <div className="results-table">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                {/* <Col> */} <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                {/* </Col> */}
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
        {/* <Row>
          <Col size="md-8"></Col>
          <Col size="md-4"></Col>
        </Row> */}
      </div>
    );
  }
}

export default Results;
