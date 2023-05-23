import {
    FiCpu,
    FiGithub,
    FiImage,
    FiMail,
    FiUser,
    FiTwitter,
} from "react-icons/fi";
import { AiOutlineCopyright } from "react-icons/ai";
import "./footer.scss";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-heading'>
                    <h2>Hello!</h2>
                    <div className='social-profiles'>
                        <a href='https://github.com/predator2v0'>
                            <FiGithub size='1rem' />
                        </a>
                        <a href='https://twitter.com/predator2v0'>
                            <FiTwitter size='1rem' />
                        </a>
                    </div>
                </div>
                <div className='footer-body'>
                    <p className='footer-about-me'>
                        <FiUser />
                        <span className='about-me'>About me</span>
                        <br />
                        I&apos;m Subhakanta Roul, an engineer and developer in
                        Bangalore, IN. Right now I am working at{" "}
                        <a href='https://accenture.com'>Accenture</a>.
                    </p>
                    <p className='footer-my-vision'>
                        <FiImage />
                        <span className='my-vision'>My Vision</span>
                        <br />I am passionate about building digital products
                        using modern tech stacks within cross-functional teams.
                    </p>
                    <p className='footer-interests'>
                        <FiCpu />
                        <span className='interests'>Interests</span>
                        <br />
                        My favourite technical tools are React, Node.js,
                        MongoDB, ExpressJs, docker, vscode, git.
                    </p>
                    <p className='footer-contact'>
                        <FiMail />
                        <span className='contact'>Contact</span>
                        <br />
                        Drop me a mail at{" "}
                        <a href='mailto://papu.roul99@gmail.com'>
                            papu.roul99@gmail.com
                        </a>{" "}
                        or on Linkedin{" "}
                        <a href='https://linkedin.com/in/subhakanta-roul'>
                            @subhakanta-roul
                        </a>
                    </p>
                </div>
                <div className='footer-copyright'>
                    <div className='copy-text'>
                        <div className='sep-line'></div>
                        <p>
                            <AiOutlineCopyright />
                            <span>Subhakanta Roul &bull; 2023</span>
                        </p>
                    </div>

                    <p className='greetings'>
                        Made with{" "}
                        <span style={{ color: "red", fontSize: "1rem" }}>
                            <svg
                                stroke='currentColor'
                                fill='none'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                focusable='false'
                                role='presentation'
                                aria-label='love'
                                className='css-1mx1b4'
                                height='1em'
                                width='1em'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                            </svg>
                        </span>{" "}
                        in Odisha, IN
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
