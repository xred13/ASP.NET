import React, { Component } from "react";
import enhanceWithClickOutside from "react-click-outside";
import LoginButton from "./LoginButton/LoginButton";
import { Link } from "react-router-dom";

class SmallNavbar extends Component {
  state = {
    display: "none"
  };
  dropdownClicked = () => {
    console.log("dropdown clicked!");
    if (this.state.display === "none") {
      this.setState({ display: "block" });
    } else {
      this.setState({ display: "none" });
    }
  };

  handleClickOutside = () => {
      if(this.state.display === "block"){
          this.setState({display: "none"});
      }
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="navbar-low-width-dropdown-button"
          onClick={() => this.dropdownClicked()}
        >
          <div className="arrow-down" />
        </div>
        <ul
          className="navbar-items-container"
          style={{ display: this.state.display }}
        >
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <li className="navbar-dropdown">
            Projects
            <ul className="navbar-dropdown-items-container">
              <Link to="/WebDevelopment">
                <li className="navbar-dropdown-item">WebDev</li>
              </Link>
              <Link to="/GameDevelopment">
                <li className="navbar-dropdown-item">GameDev</li>
              </Link>
            </ul>
          </li>
          <Link to="/AboutMe">
            <li className="navbar-item">AboutMe</li>
          </Link>
          <Link to="/Contacts">
            <li className="navbar-item">Contacts</li>
          </Link>
          <LoginButton />
        </ul>
      </React.Fragment>
    );
  }
}

export default enhanceWithClickOutside(SmallNavbar);
