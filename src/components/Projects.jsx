import React from "react";
import ProjectCard from "./ProjectCard";
import AllProjects from "../res/Projects";
const Projects = () => {
    return (
        <div className='projects'>
            <h4>Projects</h4>
            <div className='projects__all'>
                {AllProjects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            techStack={project.techStack}
                            url={project.url}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
