import React from "react";

const Profile = () => {
    const viewResume = () =>{
        window.open('res/subhakanta_roul_resume.pdf', '_blank');
    }
    const hireMe = () =>{
        window.open('mailto: papu.roul99@gmail.com', '_blank');
    }
    return (
        <div className='profile'>
            <img src='profile-pic.png' alt='profile' className='profile__image' />
            <div className='profile__details'>
                <h1>Subhakanta Roul</h1>
                <p>I'm a Software Developer based in Bangalore, India</p>
            </div>
            <div className='action__buttons'>
                <button className='resume__button' onClick={viewResume}>View Resume</button>
                <button className='hire__button' onClick={hireMe}>Hire Me!</button>
            </div>
        </div>
    );
};

export default Profile;
