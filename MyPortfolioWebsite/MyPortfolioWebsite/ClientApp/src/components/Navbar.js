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
          <Link to="/"><li className="navbar-item">Home</li></Link>
          <li className="navbar-dropdown">
            Projects
            <ul className="navbar-dropdown-items-container">
            <Link to="/WebDevelopment"><li className="navbar-dropdown-item">WebDev</li></Link>
              <Link to="/GameDevelopment"><li className="navbar-dropdown-item">GameDev</li></Link>
            </ul>
          </li>
          <Link to="/AboutMe"><li className="navbar-item">AboutMe</li></Link>
          <Link to="/Contacts"><li className="navbar-item">Contacts</li></Link>
          <LoginButton />
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

