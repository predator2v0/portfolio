import "./Home.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
const Home = () => {
    return (
        <div className='container'>
            <div className='wall'></div>
            <Profile />
            <About />
            <Experience />
            <Projects />
        </div>
    );
};

export default Home;
