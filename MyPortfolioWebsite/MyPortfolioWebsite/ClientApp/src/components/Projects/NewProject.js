import React, { Component } from 'react';
import { WebDevelopment } from './WebDevelopment';
import { GameDevelopment } from './GameDevelopment';
import ImageUploader from "react-images-upload";


export class NewProject extends Component{

    constructor(props){
        super(props);
        this.onChangeImage = this.onChangeImage.bind(this);
    }

    state = {
        newProjectFormToggled: false,
        Images: [],
        Title: "",
        Description: "",
        ProjectType: ""
    }

    newProjectClicked = () => {
        // change css class new-project display from none to block
        // and from block to inline

        if(this.state.newProjectFormToggled){
            this.setState({newProjectFormToggled: false})
        }
        else{
            this.setState({newProjectFormToggled: true})
        }
        
    }

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
        console.log("STATE: ");
        console.log(this.state);
    }

    onChangeImage(event){
        console.log("PICTURES BEFORE: ");
        console.log(this.state.Images);

        let images = event.target.files;

        this.setState({
            Images: this.state.Images.concat(images)
        });
        console.log("PICTURES AFTER: ");
        console.log(this.state.Images);
    }

    onSubmit = (event) => {

        event.preventDefault();
        fetch("https://localhost:5001/api/projects/add", 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({Title: this.state.Title, Description: this.state.Description, ProjectType: this.state.ProjectType})
        });


    }

    render(){
        if(this.props.isLoggedIn){
            console.log("PROJECT TOGGLED: "+this.state.newProjectFormToggled);

            if(this.state.newProjectFormToggled){
                return(
                    <div>
                        <button onClick={this.newProjectClicked}>New Project</button>
        
                        <div className="new-project" id="new-project-id">
                            
                            <form onSubmit={this.onSubmit}>
                                <label htmlFor="Title">Title:</label>
                                <input type="text" value={this.state.Title} onChange={this.onChange} placeholder="Title" id="Title" />
        
                                <br/>
        
                                <label htmlFor="Description">Description:</label>
                                <input type="text" value={this.state.Description} onChange={this.onChange}  placeholder="Description" id="Description" />
        
                                <br />
        
                                <label htmlFor="Images">Images:</label>
                                <input type="file" name="Images" id="Images" onChange={this.onChangeImage} accept="image/png, image/jpeg, image/jpg"/>
        
        
                                {/* <ImageUploader
                                    withIcon={true}
                                    buttonText="Choose images"
                                    onChange={this.onChangeImage}
                                    imgExtension={[".jpg", ".png"]}
                                    maxFileSize={5242880}
                                />  */}
        
        
                                <label htmlFor="ProjectType">ProjectType:</label>
                                <select id="ProjectType" value={this.state.ProjectType} onChange={this.onChange}>
                                    <option hidden defaultValue> --- Select an Option --- </option>
                                    <option value="WebDevelopment">WebDevelopment</option>
                                    <option value="GameDevelopment">GameDevelopment</option>
                                </select>
        
                                <button type="submit" value="Submit" onClick={this.onSubmit}>Submit</button>
                            </form>
                            
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <button onClick={this.newProjectClicked}>New Project</button>
                    </div>
                );
            }
        }
        else{
            return null;
        }
    }
}