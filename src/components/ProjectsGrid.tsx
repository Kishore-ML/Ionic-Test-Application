import React from "react";
import ProjectTile from "./ProjectTile";
import './style.css';

interface Props{
    projects:{projectId:string,projectName:string}[];
}

const ProjectsGrid:React.FC<Props> = ({projects}) =>{
    return(
       <div className="project-grid">
        {projects.map((project) => <ProjectTile projectName={project.projectName} /> )}
       </div>
    )
}

export default ProjectsGrid;