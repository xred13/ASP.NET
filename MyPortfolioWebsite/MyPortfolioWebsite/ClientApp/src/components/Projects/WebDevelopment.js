import React, { Component } from 'react';
import { Project } from './Project';
import { connect } from "react-redux";
import ProjectPopUp from './ProjectPopUp';

class WebDevelopment extends Component{
    displayName = WebDevelopment.name;

    state = {
        // Each project in projects has a 
        // title, description and image
        projects: [],
        loading: true,
        projectPopUpToggled: false,
        project: null
    }

    forceUpdate = async () => {
        await this.timeout(1000);
        
        fetch("https://localhost:5001/api/projects/get/WebDevelopment", {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => this.setState({projects: data, loading: false}));
    }

    timeout(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    componentDidMount(){
        fetch("https://localhost:5001/api/projects/get/WebDevelopment", {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => this.setState({projects: data, loading: false}));
    }

    projectClicked = (project) => {
        console.log("Project clicked!");
        this.setState({projectPopUpToggled: true, project: project});
    }

    projectPopUpClickOutside = () => {
        console.log("Clicked outside!");
        this.setState({projectPopUpToggled: false});
    }

    render(){
        if(!this.state.loading){
            console.log("Loading stopped, passing data: " + this.state.projects);
            return(
                <div className="projects-container">
                    {this.state.projectPopUpToggled ? <ProjectPopUp projectPopUpClickOutside={this.projectPopUpClickOutside} isLoggedIn={this.props.isLoggedIn} project={this.state.project} forceUpdate={this.forceUpdate} /> : null}
                    <Project projectClicked={this.projectClicked} forceUpdate={() => this.forceUpdate()} isLoggedIn={this.props.isLoggedIn} projects={this.state.projects}/>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(WebDevelopment);