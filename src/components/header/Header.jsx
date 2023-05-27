import BackgroundAnimation from "../backgroundAnimation/BackgroundAnimation";
import "./header.scss";
const Header = () => {
    return (
        <section className='header container' id="header">
            <div className='hero'>
                <h1>I am <br /> Subhakanta Roul</h1>
                <p>
                    Experienced MERN stack developer with a passion for building
                    efficient and responsive web applications. Skilled in
                    developing both frontend and backend, I aim to create
                    user-friendly and visually appealing websites.
                </p>
                <div className="hero-cta">
                    <button className="resume-cta">
                        Resume
                    </button>
                    <button className="hire-me-cta">
                        Hire Me
                    </button>
                </div>
            </div>
            <BackgroundAnimation />
        </section>
    );
};

export default Header;
