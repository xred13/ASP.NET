import React, { Component } from 'react';

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
        ProjectType: "",
        ImageIndex: ""
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

            const formData = new FormData();
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

            formData.append("imagesBase64", imagesBase64);
            formData.append("projectId", this.props.projectId);

            fetch("https://localhost:5001/api/projects/edit/image", 
            {
                method: "POST",
                body: formData
            });
        }
        else if(event.target.value === "DeleteImage"){
            const formData = new FormData();

            formData.append("projectId", this.props.projectId);
            formData.append("imageIndex", this.state.ImageIndex);

            fetch("https://localhost:5001/api/projects/edit/image",
            {
                method: "DELETE",
                body: formData
            });
        }
        else{
            return;
        }

        this.props.forceUpdate();
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

                            <form onSubmit={this.onSubmit}>
                            <label htmlFor="ImageIndex">Image Index</label>
                            <input type="text" value={this.state.imageIndex} onChange={this.onChange} placeholder="Index of image to delete" id="ImageIndex" />
                            <br/>
                            <button type="submit" value="DeleteImage" onClick={this.onSubmit}>Delete Image</button>
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