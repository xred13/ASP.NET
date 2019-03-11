import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class ProjectPopUp extends Component{
    // receives isLoggedIn and a project as props with 
    // id, title, description, projecttype and images

    state = {
        editToggled: false,
        imageInputToggled: false,
        Title: "", 
        Description: "",
        ProjectType: "",
        Images: [],
        ImageIndex: 0
    }


    handleClickOutside = () => {
        this.props.projectPopUpClickOutside();
    }

    toggleEdit = () => {
        if(this.state.editToggled){
            this.setState({editToggled: false});
        }
        else{
            this.setState({editToggled: true});
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        if(event.target.value === "SubmitTitle"){
            fetch("https://localhost:5001/api/projects/edit/" + this.props.project.id + "/Title/" + this.state.Title, 
            {
                method: "PUT",
            });
        }
        else if(event.target.value === "SubmitDescription"){
            fetch("https://localhost:5001/api/projects/edit/" + this.props.project.id + "/Description/" + this.state.Description, 
            {
                method: "PUT",
            });
        }
        else if(event.target.value === "SubmitProjectType"){
            fetch("https://localhost:5001/api/projects/edit/" + this.props.project.id + "/ProjectType/" + this.state.ProjectType, 
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
                imageBase64 = testArray[1];
                if(imagesBase64.length === 0){
                    imagesBase64 += imageBase64;
                }
                else{
                    imagesBase64 += "," + imageBase64;
                }

                console.log(imagesBase64);
            }
            formData.append("imagesBase64", imagesBase64);
            formData.append("projectId", this.props.project.id);
            fetch("https://localhost:5001/api/projects/edit/image", 
            {
                method: "POST",
                body: formData
            });
        }
        else if(event.target.value === "DeleteImage"){
            const formData = new FormData();
            formData.append("projectId", this.props.project.id);
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

    onChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    
        console.log(this.state);
    }

    toggleImageInput = () => {
        if(this.state.imageInputToggled){
            this.setState({imageInputToggled: false});
        }
        else{
            this.setState({imageInputToggled: true});
        }
    }

    onChangeImage = (event) => {
        console.log(this.state);
        this.setState({
            Images: event.target.files
        });
        console.log(this.state);
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

    render(){
        console.log("IsLOGGEDIN: " + this.props.isLoggedIn + " Project Title: " + this.props.project.title);
        
        let project = this.props.project;
        let image = project.images.split(',')[0];

        return(
            <div className="project-popup">
                {this.props.isLoggedIn ? <button className="edit-button" onClick={this.toggleEdit}>Edit</button> : null}
                <div className="project-popup-images">
                    {this.state.editToggled ? <button className="edit-add-image" onClick={this.toggleImageInput}>Add</button> : null}
                    {this.state.imageInputToggled ? <input className="edit-add-image-input" type="file" accept="image/png, image/jpeg" onChange={this.onChangeImage}/> : null}
                    {this.state.imageInputToggled ? <button className="edit-add-image-submit" value="SubmitImage" onClick={this.onSubmit}>Submit</button> : null}
                    {this.state.editToggled ? <button className="edit-delete-image" value="DeleteImage" onClick={this.onSubmit}>Remove</button> : null}
                    <img alt="Project slider" src={`data:image/jpeg;base64,${image}`} />
                </div>
                <div className="project-popup-text">
                    {this.state.editToggled ? <input type="text" id="Title" onChange={this.onChange} className="project-popup-title" placeholder={project.title}></input> : <div className="project-popup-title">{project.title}</div>}
                    {this.state.editToggled ? <button className="edit-submit-title" value="SubmitTitle" onClick={this.onSubmit}>Submit</button> : null}
                    {this.state.editToggled ? <textarea id="Description" onChange={this.onChange} className="project-popup-description" placeholder={project.description}></textarea> : <div className="project-popup-description">{project.description}</div>}
                    {this.state.editToggled ? <button className="edit-submit-description" value="SubmitDescription" onClick={this.onSubmit}>Submit</button> : null}
                    {this.state.editToggled ? 
                        <select className="project-popup-projecttype" id="ProjectType" onChange={this.onChange}>
                            <option>WebDevelopment</option>
                            <option>GameDevelopment</option>
                        </select> : null}
                    {this.state.editToggled ? <button className="edit-submit-projecttype" value="SubmitProjectType" onClick={this.onSubmit}>Submit</button> : null}
                
                </div>
            </div>
        );
    }
}

export default enhanceWithClickOutside(ProjectPopUp);