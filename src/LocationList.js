import React, { Component } from "react";

export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Student Kennels North</h3>
          <h4>Nashville North Location</h4>
          <h5>500 Puppy Way</h5>
        </div>
        <div>
          <h3>Student Kennels South</h3>
          <h4>Nashville South Location</h4>
          <h5>500 Kitty Way</h5>
        </div>
        <div>
          <h3>Student Kennels West</h3>
          <h4>Nashville West Location</h4>
          <h5>500 Snake Way</h5>
        </div>
      </React.Fragment>
    );
  }
}
