import React, { Component } from 'react';
import { Route } from 'react-router';
import { AboutMe } from './components/AboutMe';
import { Contacts } from './components/Contacts';
import { More } from './components/More';
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login'
import './css/app.css';
import AppContent from "./components/AppContent";

export default class App extends Component {
  displayName = App.name

  componentDidMount(){
    console.log("App.js is mounted!");
  }


  render() {
    return (
      <div className="main-div">
        <Navbar/>
        <Route exact path="/" component={AppContent} />
      </div>
    );
  }
}
