import React, { Component } from 'react';

export class Project extends Component{

    constructor(props){
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    state = {
        width: 0,
        height: 0
    }


    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentDidMount(){

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    render(){
        if(this.props.projects.length === 0 || this.props.projects === null){
            console.log("NO PROJECTS: " + this.props.projects.length + " and they are: " + JSON.stringify(this.props.projects));
            return(
                <div>
                    Wow, such empty
                </div>
            );
        }
        else{
            console.log("There are: " + this.props.projects.length + " projects.");

            if(this.state.width >= 900){
                let cont = 1;
                let remaining = this.props.projects.length;
                return(    
                    this.props.projects.map(project => {    
                        // we choose first image of the array
                        let image = project.images.split(',')[0];
                        if(remaining > 2){
                            if(cont === 1){
                                cont++; 
                                if(cont > 3){
                                    cont = 1;
                                }
                                return (
                                    <div className="project" style={{"gridColumn": "1/4"}} key={project.id}>
                                        <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                    </div>
                                );
                            }
                            else if(cont === 2){
                                cont++; 
                                if(cont > 3){
                                    cont = 1;
                                }
                                return (
                                    <div className="project" style={{"gridColumn": "4/8"}} key={project.id}>
                                        <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                    </div>
                                );
                            }
                            else{
                                remaining -= 3;
                                cont = 1;
                                
                                return (
                                    <div className="project" style={{"gridColumn": "8/11"}} key={project.id}>
                                        <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                    </div>
                                );
                            }
                        }
                        else if(remaining === 2){
                            if(cont === 1){
                                cont++; 
                                if(cont > 2){
                                    cont = 1;
                                }
                                return (
                                    <div className="project" style={{"gridColumn": "2/5"}} key={project.id}>
                                        <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                    </div>
                                );
                            }
                            else{
                                cont = 1;
                                
                                return (
                                    <div className="project" style={{"gridColumn": "7/10"}} key={project.id}>
                                        <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                    </div>
                                );
                            }
                        }
                        else{
                            return (
                                <div className="project" style={{"gridColumn": "4/8"}} key={project.id}>
                                    <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                </div>
                            );
                        }
                    }
                ));
            }
            else if(this.state.width >= 700){
                let cont = 1;
                let remaining = this.props.projects.length;

                return(    
                    this.props.projects.map(project => {
                        console.log(project);
    
                        let image = project.images.split(',')[0];

                        if(remaining > 1){
                            if(cont === 1){
                                cont++;
                                return (
                                    <div className="project" style={{"gridColumn": "1/4"}} key={project.id}>
                                        <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                    </div>
                                );
                            }
                            else{
                                cont = 1;
                                remaining -= 2;
                                return (
                                    <div className="project" style={{"gridColumn": "4/7"}} key={project.id}>
                                        <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                    </div>
                                );
                            }
                        }
                        else{
                            return (
                                <div className="project" style={{"gridColumn": "2/6"}} key={project.id}>
                                    <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                                </div>
                            );
                        }
                    }
                ));
            }
            else{
                return(
                    this.props.projects.map(project => {

                        let image = project.images.split(',')[0];

                        return (
                            <div className="project" style={{"gridColumn": "1/2"}} key={project.id}>
                                <img alt="Project" src={`data:image/jpeg;base64,${image}`} onClick={() => this.props.projectClicked(project)} />
                            </div>
                        );
                    })
                );
            }
    
        }
    }
}