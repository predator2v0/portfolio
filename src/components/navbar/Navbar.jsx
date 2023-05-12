import './navbar.scss'
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
        </nav>
    );
};

export default Navbar;