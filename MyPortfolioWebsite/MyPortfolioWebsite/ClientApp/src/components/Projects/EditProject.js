import React, { Component } from 'react';
import ImageUploader from "react-images-upload";
import axios from 'axios';


export class EditProject extends Component{

    constructor(props){
        super(props);
        this.onChangeImage = this.onChangeImage.bind(this);
    }

    state = {
        editProjectFormToggled: false,
        Images: [],
        Title: "",
        Description: "",
        ProjectType: ""
    }

    editProjectClicked = () => {
        // change css class edit-project display from none to block
        // and from block to inline

        if(this.state.editProjectFormToggled){
            this.setState({editProjectFormToggled: false})
        }
        else{
            this.setState({editProjectFormToggled: true})
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
            Images: this.state.Images.concat(event.target.files)
        });
        console.log("PICTURES AFTER: ");
        console.log(this.state.Images);
    }

    onSubmit = (event) => {

        event.preventDefault();

        console.log("ONSUBMIT");

        if(event.target.value === "SubmitTitle"){
            fetch("https://localhost:5001/api/projects/edit/" + this.props.projectId + "/Title/" + this.state.Title, 
            {
                method: "PUT",
            });
        }
        else if(event.target.value === "SubmitDescription"){
            fetch("https://localhost:5001/api/projects/edit/" + this.props.projectId + "/Description/" + this.state.Description, 
            {
                method: "PUT",
            });
        }
        else if(event.target.value === "SubmitProjectType"){
            fetch("https://localhost:5001/api/projects/edit/" + this.props.projectId + "/ProjectType/" + this.state.ProjectType, 
            {
                method: "PUT",
            });
        }
        else if(event.target.value === "SubmitImage"){

            // const formData = new FormData();
            // formData.append("photo", this.state.Images[0]);

            // console.log("IMAGE ARRAY: ");
            // console.log(this.state.Images);
            // console.log("IMAGE: ");
            // console.log(this.state.Images[0]);
            // console.log("Form DATA: ");
            // console.log(formData);

            // fetch("https://localhost:5001/api/projects/edit/image/" + this.props.projectId + "/add", 
            // {
            //     method: "PUT",
            //     body: JSON.stringify({photo: this.state.Images[0]})
            // });

            
            let form = new FormData();

            for(var index = 0; index < this.state.Images.length; index++){
                var image = this.state.Images[index];
                form.append("photo", image);
            }

            axios.post("https://localhost:5001/api/projects/edit/image/" + this.props.projectId + "/add", form);
        }
        else{
            return;
        }
    }

    render(){
        if(this.props.isLoggedIn){
            console.log("EDIT PROJECT TOGGLED: "+this.state.editProjectFormToggled);

            if(this.state.editProjectFormToggled){
                return(
                    <div className="edit-project-div">
                        <button className="edit-project-button" onClick={this.editProjectClicked}>Edit Project</button>
        
                        <div className="edit-project" id="edit-project-id">
                            
                            <form onSubmit={this.onSubmit}>
                                <label htmlFor="Title">Title:</label>
                                <input type="text" value={this.state.Title} onChange={this.onChange} placeholder="Title" id="Title" />
        
                                <button type="submit" value="SubmitTitle" onClick={this.onSubmit}>Submit</button>
                            </form>

                            <form onSubmit={this.onSubmit}>
        
                                <label htmlFor="Description">Description:</label>
                                <input type="text" value={this.state.Description} onChange={this.onChange}  placeholder="Description" id="Description" />
        
                                <button type="submit" value="SubmitDescription" onClick={this.onSubmit}>Submit</button>
                            </form>

                            <form onSubmit={this.onSubmit}>
        
                                <label htmlFor="Images">Images:</label>
                                <input type="file" id="Images" onChange={this.onChangeImage} accept="image/png, image/jpeg"/>
        
        
                                {/* <ImageUploader
                                    withIcon={true}
                                    buttonText="Choose images"
                                    onChange={this.onChangeImage}
                                    imgExtension={[".jpg", ".png"]}
                                    maxFileSize={5242880}
                                />  */}

        
                                <button type="submit" value="SubmitImage" onClick={this.onSubmit}>Submit</button>
                            </form>

                            <form onSubmit={this.onSubmit}>
                                <label htmlFor="ProjectType">ProjectType:</label>
                                <select id="ProjectType" value={this.state.ProjectType} onChange={this.onChange}>
                                    <option hidden defaultValue> --- Select an Option --- </option>
                                    <option value="WebDevelopment">WebDevelopment</option>
                                    <option value="GameDevelopment">GameDevelopment</option>
                                </select>
        
                                <button type="submit" value="SubmitProjectType" onClick={this.onSubmit}>Submit</button>
                            </form>
                            
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <div className="edit-project-div">
                        <button className="edit-project-button" onClick={this.editProjectClicked}>Edit Project</button>
                    </div>
                );
            }
        }
        else{
            return null;
        }
    }
}