import React from "react";
import "../styles/resultsList.css";

// import Col from "./col";
// import Row from "./row";
// import Search from "./search";

function Results({ persons }) {
  return (
    <div className="container">
      {" "}
      <div className="results-table">
        <table className="table table-striped table-dark table-sortable">
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
            {persons.map((person, index) => (
              <tr key={index}>
                <td>
                  <img src={person.picture.medium} alt="person-photo" />{" "}
                </td>
                <td>{person.name.first}</td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{person.dob.date.slice(0, 10)}</td>
              </tr>
            ))}
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

export default Results;
