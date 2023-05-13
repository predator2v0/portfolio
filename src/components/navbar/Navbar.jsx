import './navbar.scss'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
            <img src="/assets/predator2v0-profile-pic.png" alt="" className="logo" />
            <h1>SR</h1>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#blog">blog</a>
                    </li>
                    <li>
                        <a href="#work">work</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </div>
            <div className="social-profiles">
                <a href="https://github.com/predator2v0" className="github">
                    <FiGithub size="1.5rem"/>
                </a>
                <a href="https://linkedin.com/in/subhakanta-roul" className="linkedin">
                    <FiLinkedin size="1.5rem"/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;