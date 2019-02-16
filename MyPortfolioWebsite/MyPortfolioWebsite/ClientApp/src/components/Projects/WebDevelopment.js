import React, { Component } from 'react';
import { Project } from './Project';

export class WebDevelopment extends Component{
    displayName = WebDevelopment.name;

    state = {
        projects: []
    }

    componentDidMount(){

        fetch("https://localhost:5001/api/projects/get/WebDevelopment")
            .then(response => response.json())
            .then(data => this.setState({projects: data}));
            
    }
    render(){
        return(
            <Project projects={this.state.projects}/>
        );
    }
}