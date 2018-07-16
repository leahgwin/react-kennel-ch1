import React, { Component } from "react";
import Animal from "./Animal";

export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Harper" },
      { id: 2, name: "Scout" },
      { id: 3, name: "Hyde" },
      { id: 4, name: "Alphie" },
      { id: 5, name: "Murphy" },
      { id: 6, name: "Ivan" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <h2>Animals</h2>
        <ul>
          {this.state.animals.map(animal => (
            <Animal key={animal.id} animal={animal} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
