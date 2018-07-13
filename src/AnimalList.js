import React, { Component } from "react";

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
        <ul>{this.state.animals.map(animal => <li>{animal.name}</li>)}</ul>
      </React.Fragment>
    );
  }
}
