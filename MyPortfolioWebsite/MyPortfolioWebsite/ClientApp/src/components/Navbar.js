import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  displayName = Navbar.name

  render() {
    return (
      <nav className="navbar">
        <select className="navbar-button">
          <option value="WebdDevelopment">WebDevelopment</option>
          <option value="GameDevelopment">GameDevelopment</option>
        </select>
        <Link to="/Aboutme"><button className="navbar-button">About me</button></Link>
        <Link to="/Contacts"><button className="navbar-button">Contacts</button></Link>
        <Link to="/More"><button className="navbar-button">More</button></Link>
        <Link to="/Login"><button className="navbar-button">Login</button></Link>
      </nav>

    );
  }
}

