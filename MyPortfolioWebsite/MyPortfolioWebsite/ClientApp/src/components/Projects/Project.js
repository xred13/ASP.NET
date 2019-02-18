import React from 'react';

export const Project = (props) => {

    if(props.projects.length === 0){
        console.log("NO PROJECTS: " + props.projects.length + " and they are: " + JSON.stringify(props.projects));
        return(
            <div>
                Wow, such empty
            </div>
        );
    }
    else{
        console.log("There are: " + props.projects.length + " projects.");
        return(        
            props.projects.map(project => {
                console.log(project.id);
                return (
                    <div className="project" key={project.id}>
                        <h1>{project.title}</h1>
                        <h3>{project.description}</h3>
                    </div>
                );
            }
        ));

    }
}