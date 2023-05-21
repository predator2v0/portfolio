import "./projects.scss";
import allProjects from "./projects.json";
import { FiGithub } from "react-icons/fi";
const projects = () => {
    console.log(allProjects);
    return (
        <section className='projects container'>
            <h1 className='section-title'>My Projects</h1>
            <div className='project-container'>
                {allProjects.map((project, id) => (
                    <div className='project' key={id}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='project-thumbnail'
                        />
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>
                            {project.description}
                        </p>
                        <div className='tags'>
                            {project.tags.map((tag, id) => (
                                <span key={id} className='tag'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className='project-links'>
                            <a href={project.githubLink}>
                                <FiGithub size='1rem' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default projects;
