import './projects.scss';
import allProjects from './projects.json'
const projects = () => {
    console.log(allProjects);
    return (
        <div className='projects container'>
            <h1>My Projects</h1>
            <div className="project-container">
                {allProjects.map((project, id) => (
                    <div className="project" key={id}>
                        <img src={project.image} alt={project.title} className='project-thumbnail'/>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            <p>
                                {project.tags.map((tag,id)=>(
                                    <span key={id}>{tag}</span>
                                ))}
                            </p>
                        </div>
                        <div className="project-links">
                            <a href={project.githubLink}>gh</a>
                        </div>
                    </div>
                ))}
                
                
            </div>
        </div>
    );
};

export default projects;