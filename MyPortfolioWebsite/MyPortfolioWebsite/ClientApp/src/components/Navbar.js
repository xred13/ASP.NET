import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginButton from './LoginButton';

class Navbar extends Component {
  displayName = Navbar.name

  constructor(props){
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  state = {
    width: 0,
    height: 0,
    display: "none"
  }


  updateWindowDimensions() {
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

  dropdownClicked = () => {
    console.log("dropdown clicked!")
    if(this.state.display === "none"){
      this.setState({display: "block"})
    }
    else{
      this.setState({display: "none"})
    }
  }

  render() {
    if(this.state.width < 700){
      return (
        <nav className="navbar">
          <div className="low-width-item"  onClick={() => this.dropdownClicked()}>
            <div className="arrow-down"></div>
          </div>
          <ul className="navbar-items-container" style={{"display": this.state.display}}>
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
    else{
      return (
        <nav className="navbar">
          <div className="low-width-item"></div>
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
}


const mapStateToProps = (state) => {
  return{
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Navbar);

