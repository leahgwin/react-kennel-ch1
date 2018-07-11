import React, { Component } from "react";
export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Locations</h2>
        {this.props.locations.map(location => (
          <div>
            <ul>{location.name}</ul>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
