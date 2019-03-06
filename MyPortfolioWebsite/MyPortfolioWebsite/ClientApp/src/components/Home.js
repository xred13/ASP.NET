import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name


  componentDidMount(){
    console.log("Mounted Home.js");
  }

  render() {
    return (
      <div>
        <h1>This is the home webpage!</h1>
      </div>
    );
  }
}
