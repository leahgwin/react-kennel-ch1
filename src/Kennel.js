import ReactDOM from "react-dom";
import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import LocationList from "./LocationList";
import AnimalList from "./AnimalList";

export default class Kennel extends Component {
  state = {
    employees: [
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
    ],
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ],
    animals: [
      { id: 1, name: "Harper" },
      { id: 2, name: "Scout" },
      { id: 3, name: "Hyde" },
      { id: 4, name: "Alphie" },
      { id: 5, name: "Murphy" },
      { id: 6, name: "Ivan" }
    ],
    owners: [
      { id: 1, name: "Leah Gwin" },
      { id: 2, name: "Davina Gwin" },
      { id: 3, name: "Hanna Cimperman" },
      { id: 4, name: "Alicia Berrier" },
      { id: 5, name: "Patrick Berrier" },
      { id: 6, name: "Ansley Gwin" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Kennel />, document.querySelector("#root"));
