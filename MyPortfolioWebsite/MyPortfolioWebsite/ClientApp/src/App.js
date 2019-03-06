import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Contacts } from './components/Contacts';
import { More } from './components/More';
import { Projects } from './components/Projects/Projects'
import Navbar from './components/Navbar'
import Login from './components/Login'
import './css/app.css';

export default class App extends Component {
  displayName = App.name

  componentDidMount(){
    console.log("App.js is mounted!");
  }


  render() {
    return (
      <div>
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/AboutMe' component={AboutMe} />
        <Route path='/Contacts' component={Contacts} />
        <Route path='/More' component={More} />
        <Route path='/:projectType' component={Projects} />        
        <Route path="/Login" component={Login} />
      </div>
    );
  }
}
