import { useState } from "react";
import "./navbar.scss";
import { FiGithub, FiLinkedin, FiMenu } from "react-icons/fi";
const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const handleToggle = () => {
        setShowNav(!showNav);
    };
    return (
        <nav className='navbar container'>
            <div className='nav-brand'>
                <img
                    src='/assets/predator2v0-profile-pic.png'
                    alt=''
                    className='logo'
                />
            </div>
            <div className={`nav-menu ${!showNav ? "hide" : ""}`}>
                <ul>
                    <li>
                        <a href='#header'>home</a>
                    </li>
                    <li>
                        <a href='#about'>about</a>
                    </li>
                    <li>
                        <a href='#projects'>work</a>
                    </li>
                    <li>
                        <a href='#blog'>blog</a>
                    </li>
                </ul>
            </div>
            <div className={`social-profiles ${!showNav ? "hide" : ""}`}>
                <a href='https://github.com/predator2v0' className='github'>
                    <FiGithub size='1.5rem' />
                </a>
                <a
                    href='https://linkedin.com/in/subhakanta-roul'
                    className='linkedin'
                >
                    <FiLinkedin size='1.5rem' />
                </a>
            </div>
            <div className='toggle-navbar'>
                <FiMenu size='2rem' onClick={() => handleToggle()} />
            </div>
        </nav>
    );
};

export default Navbar;
