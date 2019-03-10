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

        this.setState({
            Images: event.target.files
        });
        console.log("PICTURES AFTER: ");
        console.log(this.state.Images);
    }

    readFileAsync = (file) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsDataURL(file);
        })
    }

    onSubmit = async (event) => {

        event.preventDefault();

        let imagesBase64 = "";
        for(var i = 0; i < this.state.Images.length; i++){
            let imageBase64 = await this.readFileAsync(this.state.Images[i]);
            
            let testArray = imageBase64.split(",");
            console.log("ARRAY LENGTH MUST BE 2: " + testArray.length);

            imageBase64 = testArray[1];

            if(imagesBase64.length == 0){
                imagesBase64 += imageBase64;
            }
            else{
                imagesBase64 += "," + imageBase64;
            }

            console.log(imagesBase64);
        }

        const formData = new FormData();
        formData.append("Title", this.state.Title);
        formData.append("Description", this.state.Description);
        formData.append("ProjectType", this.state.ProjectType);
        formData.append("ImagesBase64", imagesBase64);

        fetch("https://localhost:5001/api/projects/add", 
        {
            method: "POST",
            body: formData
        });

    }

    render(){
        if(this.props.isLoggedIn){
            console.log("PROJECT TOGGLED: "+this.state.newProjectFormToggled);

            if(this.state.newProjectFormToggled){
                return(
                    <div className="new-project-div">
                        <button className="new-project-button" onClick={this.newProjectClicked}>New Project</button>
        
                        <div className="new-project" id="new-project-id">
                            
                            <form onSubmit={this.onSubmit}>
                                <label htmlFor="Title">Title:</label>
                                <input type="text" value={this.state.Title} onChange={this.onChange} placeholder="Title" id="Title" />
        
                                <br/>
        
                                <label htmlFor="Description">Description:</label>
                                <input type="text" value={this.state.Description} onChange={this.onChange}  placeholder="Description" id="Description" />
        
                                <br />
        
                                <label htmlFor="Images">Images:</label>
                                <input type="file" id="Images" onChange={this.onChangeImage} accept="image/png, image/jpeg, image/jpg"/>
        
        
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
                    <div className="new-project-div">
                        <button className="new-project-button" onClick={this.newProjectClicked}>New Project</button>
                    </div>
                );
            }
        }
        else{
            return null;
        }
    }
}