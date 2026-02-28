import React from "react";
import Hero from "../Hero";
import SkillChart from "../SkillChart";

const About = () => {
  return (
    <>
      <Hero />
      <div className="displays">
      <img src={"/pict.jpg"} className="pro-pic" />
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
