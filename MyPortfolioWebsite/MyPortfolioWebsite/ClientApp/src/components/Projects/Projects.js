import React, { Component } from 'react';
import { WebDevelopment } from './WebDevelopment';
import GameDevelopment from './GameDevelopment';
import { connect } from 'react-redux';
import { NewProject } from './NewProject';

class Projects extends Component{
    displayName = Projects.name;

    render(){

        const projectType = this.props.match.params.projectType;
        console.log(projectType);

        if(projectType === "WebDevelopment"){
            console.log("Loading WebDev projects.")
            return(
                <div>
                    <NewProject isLoggedIn={this.props.isLoggedIn}/>
                    <WebDevelopment />
                </div>
            );
        }
        else if(projectType === "GameDevelopment"){
            console.log("Loading GameDev projects.")
            return(
                <div>
                    <NewProject isLoggedIn={this.props.isLoggedIn}/>
                    <GameDevelopment />
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Projects);
