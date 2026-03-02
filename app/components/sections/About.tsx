import React from "react";
import Hero from "../Hero";
import SkillChart from "../SkillChart";

const About = () => {
  return (
    <>
      <Hero />
      <div className="displays">
      <div className="pro-pic-wrapper">
      <img src={"/pict.jpeg"} className="pro-pic" />
      </div>
      <SkillChart 
        skills={[
            {name: 'C++', level: 90},
            {name: 'Python', level: 75},
            {name: 'Typescript', level: 60},
            {name: 'Next', level: 80},
            {name: 'SQL', level: 70},
        ]} 
        />
        </div>
    </>
  );
};

export default About;
