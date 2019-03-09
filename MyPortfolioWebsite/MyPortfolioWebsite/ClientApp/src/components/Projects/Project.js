import React from 'react';
import { EditProject } from "./EditProject";

export const Project = (props) => {

    if(props.projects.length === 0 || props.projects === null){
        console.log("NO PROJECTS: " + props.projects.length + " and they are: " + JSON.stringify(props.projects));
        return(
            <div>
                Wow, such empty
            </div>
        );
    }
    else{
        console.log("There are: " + props.projects.length + " projects.");

        let cont = 0;

        if(props.isLoggedIn){
            return(        
                props.projects.map(project => {
                    console.log(project);
                    console.log(project.id);
                    console.log(project.ImageListString);
    
                    return (
                        <div className="project" key={project.id}>
                            <img src={`data:image/jpeg;base64,${project.imageListString}`} />
                            <EditProject isLoggedIn={props.isLoggedIn} projectId={project.id}/>
                        </div>
                    );
                }
            ));
        }
        else{
            return(        
                props.projects.map(project => {
                    console.log(project);
                    console.log(project.id);
                    console.log(project.ImageListString);
    
                    return (
                        <div className="project" key={project.id}>
                            <img src={`data:image/jpeg;base64,${project.imageListString}`} />
                        </div>
                    );
                }
            ));
        }


    }
}