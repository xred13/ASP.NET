import React, { Component } from "react";
import { AboutMe } from "./AboutMe";
import { Home } from "./Home";
import Projects from "./Projects/Projects";
import { Contacts } from "./Contacts";

export default class AppContent extends Component{

    render(){
        return(
            <div className="body-div">
                <Home />
                <AboutMe />
                <Projects />
                <Contacts />
            </div>
        );
    }
}