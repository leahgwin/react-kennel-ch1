import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <section id="navLink">
          <Link to="/">Locations</Link>
        </section>
        <div id="navLink">
          <Link to="/animals">Animals</Link>
        </div>
        <div id="navLink">
          <Link to="/employees">Employees</Link>
        </div>
      </nav>
    );
  }
}
