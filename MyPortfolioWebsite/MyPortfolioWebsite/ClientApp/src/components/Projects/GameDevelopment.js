import React, { Component } from 'react';
import { Project } from './Project';
import { connect } from "react-redux";

class GameDevelopment extends Component{
    displayName = GameDevelopment.name;

    state = {
        // Each project in projects has a 
        // title, description and image
        projects: [],
        loading: true,
        forceUpdate: false
    }

    async forceUpdate(){
        console.log("FORCING UPDATE!");
        await this.timeout(1000);
        
        fetch("https://localhost:5001/api/projects/get/GameDevelopment", {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => this.setState({projects: data, loading: false}));
    }

    timeout(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    componentDidMount(){

        fetch("https://localhost:5001/api/projects/get/GameDevelopment", {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => this.setState({projects: data, loading: false}));
    }

    render(){
        if(!this.state.loading){
            console.log("Loading stopped, passing data: " + this.state.projects);
            return(
                <div className="projects-container">
                    <Project forceUpdate={() => this.forceUpdate()} isLoggedIn={this.props.isLoggedIn} projects={this.state.projects}/>
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

export default connect(mapStateToProps)(GameDevelopment);