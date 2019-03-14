import React, { Component } from 'react';
import WebDevelopment from './WebDevelopment';
import GameDevelopment from './GameDevelopment';
import { connect } from 'react-redux';
import { NewProject } from './NewProject';
import webdevelopment_image from "./../../images/webdevelopment.jpg";
import gamedevelopment_image from "./../../images/gamedevelopment.png";

class Projects extends Component{
    displayName = Projects.name;

    state = {
        projectType: null
    }

    componentDidMount(){
        this.setState({projectType: this.props.projectType})
    }

    webdevelopmentClicked = () => {
        if(this.state.projectType != "WebDevelopment"){
            this.setState({projectType: "WebDevelopment"});
        }
        else{
            this.setState({projectType: null});
        }
    }

    gamedevelopmentClicked = () => {
        if(this.state.projectType != "GameDevelopment"){
            this.setState({projectType: "GameDevelopment"});
        }
        else{
            this.setState({projectType: null});
        }
    }

    render(){
        return(
            <div className="projects-main-div">
                <div className="projects-header">
                    My Projects
                    <hr style={{color: "rgb(255,255,255)", margin: 0, padding: 0}}/>
                </div>
                <div className="projects-choosing">
                    <div className="projects-choosing-webdevelopment" onClick={this.webdevelopmentClicked}>
                        <div className="projects-choosing-webdevelopment-image">
                            <img alt="WebDevelopment" src={webdevelopment_image} />
                        </div>
                        WebDevelopment

                    </div>
                    <div className="projects-choosing-gamedevelopment">
                        <div className="projects-choosing-gamedevelopment-image" onClick={this.gamedevelopmentClicked}>
                            <img alt="GameDevelopment" src={gamedevelopment_image} />
                        </div>
                        GameDevelopment
                    </div>
                </div>
                {this.state.projectType === "WebDevelopment" ? 
                    <div className="projects-main-div">
                        <NewProject isLoggedIn={this.props.isLoggedIn}/>
                        <WebDevelopment />
                    </div>
                    : this.state.projectType === "GameDevelopment" ?
                    <div className="projects-main-div">
                        <NewProject isLoggedIn={this.props.isLoggedIn}/>
                        <GameDevelopment />
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Projects);
