import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginButton from './LoginButton';

class Navbar extends Component {
  displayName = Navbar.name

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-items-container">
          <li className="navbar-item"><Link to="#">Home</Link></li>
          <li className="navbar-dropdown">
            <Link to="#">Projects</Link>
            <ul className="navbar-dropdown-items-container">
              <li className="navbar-dropdown-item"><Link to="#">WebDev</Link></li>
              <li className="navbar-dropdown-item"><Link to="#">GameDev</Link></li>
            </ul>
          </li>
          <li className="navbar-item"><Link to="#">AboutMe</Link></li>
          <li className="navbar-item"><Link to="#">Contacts</Link></li>
          <li className="navbar-item"><Link to="#">Login</Link></li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Navbar);

