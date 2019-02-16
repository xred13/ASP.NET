import React, { Component } from 'react';
import { WebDevelopment } from './WebDevelopment';
import { GameDevelopment } from './GameDevelopment';


export class Projects extends Component{
    displayName = Projects.name;

    render(){

        const projectType = this.props.match.params.projectType;
        console.log(projectType);

        if(projectType === "WebDevelopment"){
            console.log("Loading WebDev projects.")
            return(
                <WebDevelopment />
            );
        }
        else if(projectType === "GameDevelopment"){
            console.log("Loading GameDev projects.")
            return(
                <GameDevelopment />
            );
        }
    }
}