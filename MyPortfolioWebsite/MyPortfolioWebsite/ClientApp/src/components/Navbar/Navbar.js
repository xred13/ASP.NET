import React, { Component } from 'react';
import SmallNavbar from './SmallNavbar';
import { BigNavbar } from './BigNavbar';

export default class Navbar extends Component {
  displayName = Navbar.name

  state = {
    width: 0,
    height: 0,
    display: "block"
  }


  updateWindowDimensions = () => {
    console.log("update");
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentDidMount(){

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return (
      <nav className="navbar">
        {this.state.width < 750 ? <SmallNavbar /> : <BigNavbar />}
      </nav>
    );
  }
}
