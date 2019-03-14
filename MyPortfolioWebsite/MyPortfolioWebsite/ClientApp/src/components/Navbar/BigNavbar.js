import React from "react";
import LoginButton from "./LoginButton/LoginButton";
import { Link } from "react-router-dom";

export const BigNavbar = props => {
  return (
    <ul className="navbar-items-container">
      <li className="navbar-item">
        Home
      </li>
      <li className="navbar-item">AboutMe</li>
      <li className="navbar-dropdown">
        Projects
        <ul className="navbar-dropdown-items-container">
          <li className="navbar-dropdown-item">WebDev</li>
          <li className="navbar-dropdown-item">GameDev</li>
        </ul>
      </li>
      <li className="navbar-item">Contacts</li>
      <LoginButton />
    </ul>
  );
};
