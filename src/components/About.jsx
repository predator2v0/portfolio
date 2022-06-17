import React from "react";

const About = () => {
    return (
        <div className='about'>
            <h4>About me</h4>
            <p>
                I am a software developer based in Bangalore, India. I have a
                passion for building web applications and I primarily work on
                MERN stack application development. I love to learn new
                technologies. I am currently working in an MNC, developing a web
                application for a client using MERN stack.
            </p>
            <div className='contact'>
                <div className='location'>
                    <p className='contact__type'>Location</p>
                    <p className='contact__info'>Bangalore, India</p>
                </div>
                <div className='website'>
                    <p className='contact__type'>Website</p>
                    <a
                        href='https://subhakanta-roul.netlify.app'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='contact__info'
                    >
                        subhakanta-roul.netlify.app &#8599;
                    </a>
                </div>
                <div className='email'>
                    <p className='contact__type'>Email</p>
                    <a
                        href='mailto:papu.roul99@gmail.com'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='contact__info'
                    >
                        papu.roul99@gmail.com &#8599;
                    </a>
                </div>
                <div className='github'>
                    <p className='contact__type'>GitHub</p>
                    <a
                        href='https://github.com/predator2v0'
                        target='_blank'
                        rel='noreferrer noopener'
                        className='contact__info'
                    >
                        @predator2v0 &#8599;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
