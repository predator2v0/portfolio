import React from "react";
import ExpCard from "./ExpCard";
import AllExperiences from "../res/Experiences";
const Experience = () => {
    return (
        <div className='experience'>
            <h4>Experience</h4>
            <div className='experience__all'>
                {/* <ExpCard /> */}
                {AllExperiences.map((experience, key) => {
                    return (
                        <ExpCard
                            key={key}
                            designation={experience.designation}
                            company={experience.company}
                            duration={experience.duration}
                            location={experience.location}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
