import BackgroundAnimation from "../backgroundAnimation/BackgroundAnimation";
import "./header.scss";
const Header = () => {
    return (
        <div className='header container'>
            <div className='hero'>
                <h1>I am <br /> Subhakanta Roul</h1>
                <p>
                    Experienced MERN stack developer with a passion for building
                    efficient and responsive web applications. Skilled in
                    developing both frontend and backend, I aim to create
                    user-friendly and visually appealing websites.
                </p>
                {/* <p>
                    I am a software developer specializing in web development
                    using the MERN stack. With a keen eye for detail and a
                    passion for creating intuitive and responsive web
                    applications, I strive to deliver top-quality work that
                    exceeds client expectations. My portfolio showcases a
                    diverse range of projects that demonstrate my expertise in
                    building scalable and robust web applications.
                </p> */}
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
        </div>
    );
};

export default Header;
