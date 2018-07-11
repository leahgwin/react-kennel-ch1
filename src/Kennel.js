import ReactDOM from "react-dom";
import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import LocationList from "./LocationList";

export default class Kennel extends Component {
  render() {
    return (
      <div>
        <EmployeeList />
        <LocationList />
      </div>
    );
  }
}

ReactDOM.render(<Kennel />, document.querySelector("#root"));
