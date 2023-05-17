import './projects.scss';

const projects = () => {
    return (
        <div className='projects container'>
            <h1>My Projects</h1>
            <div className="project-container">
                <div className="project">
                    <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjBvcmRlciUyMHJlYWN0JTIwanN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className="project-thumbnail" />
                    <h3>Project Name</h3>
                    <p>project description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi ab minima veniam nisi voluptate.</p>
                    <div className="tags">
                        <p><span>tag1</span><span>tag2</span><span>tag3</span></p>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/predator2v0/xyz" className="project-link">github</a>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="project-thumbnail" />
                    <h3>Project Name</h3>
                    <p>project description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi ab minima veniam nisi voluptate.</p>
                    <div className="tags">
                        <p><span>tag1</span><span>tag2</span><span>tag3</span></p>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/predator2v0/xyz" className="project-link">github</a>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="project-thumbnail" />
                    <h3>Project Name</h3>
                    <p>project description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi ab minima veniam nisi voluptate.</p>
                    <div className="tags">
                        <p><span>tag1</span><span>tag2</span><span>tag3</span></p>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/predator2v0/xyz" className="project-link">github</a>
                    </div>
                </div>
                <div className="project">
                    <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="project-thumbnail" />
                    <h3>Project Name</h3>
                    <p>project description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi ab minima veniam nisi voluptate.</p>
                    <div className="tags">
                        <p><span>tag1</span><span>tag2</span><span>tag3</span></p>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/predator2v0/xyz" className="project-link">github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projects;