import React, { useEffect, useState } from "react";
import Hero from "../Hero";
import SkillChart from "../SkillChart";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const default_val = [
  { name: "C++", level: 80 },
  { name: "Python", level: 75 },
  { name: "Typescript", level: 65 },
  { name: "Next", level: 60 },
  { name: "SQL", level: 70 },
];

const About = () => {
  const [val, setVal] = useState(default_val);

  // const get_stats = async () => {
  //   try {
  //     const cached = localStorage.getItem("github_lang_stats");

  //   if (cached) {
  //     setVal(JSON.parse(cached));
  //     return;
  //   }

  //     const res = await fetch(
  //       "https://api.github.com/users/Rvp0310/repos?per_page=100",
  //     );

  //     if (!res.ok) throw new Error("API down");

  //     const repos = await res.json();

  //     const langBytes: Record<string, number> = {};

  //     for (const repo of repos) {
  //     const res = await fetch(repo.languages_url);
  //     const data = await res.json();

  //     for (const [lang, bytes] of Object.entries(data)) {
  //       langBytes[lang] = (langBytes[lang] || 0) + Number(bytes);
  //     }
  //   }

  //   const sorted = Object.entries(langBytes)
  //     .sort((a, b) => b[1] - a[1])
  //     .slice(0, 4);

  //   const total = sorted.reduce((sum, [, v]) => sum + v, 0);

  //   const formatted = sorted.map(([name, bytes]) => ({
  //     name,
  //     level: Math.round((bytes / total) * 100),
  //   }));
  //     localStorage.setItem("github_lang_stats", JSON.stringify(formatted));
  //     setVal(formatted);
  //   } catch (err) {
  //     console.log("Using default skill values");
  //     setVal(default_val);
  //   }
  // };

  // useEffect(() => {
  //   get_stats();
  // }, []);

  return (
    <>
      <Hero />
      <div className="displays">
        <div className="card-stack">
          <div className="cards">
            <h5>
              <SchoolIcon />
              &emsp;Education
            </h5>
            <b>Bharati Vidyapeeth College Of Engineering, Navi Mumbai</b>
            <br />
            <ul className="list-disc pl-6">
              <li>BE in Computer Engineering</li>
              <li>2023 - Expected 2027</li>
              <li>CGPA: 9 - 10</li>
            </ul>
          </div>
          <div className="cards">
            <h5>
              <WorkspacePremiumIcon />
              &emsp;Experience
            </h5>
            <b>AI/ML Virtual Intern @ Infosys Springboard</b>
            <ul className="list-disc pl-6">
              <li>
                Developed a flask-based web app integrated with LSTM prediction
                model and visualization with Plotly.js for 'smart home energy
                optimization' project.
              </li>
              <li>
                Coordinated a team of interns for final work presentation.
              </li>
              <li>
                Recognized as a top contributor across multiple Scrum sprints
                based on performance and timely deliverables.
              </li>
            </ul>
          </div>
        </div>
        <div className="chart-wrapper">
          <SkillChart
            skills={val}
          />
        </div>
      </div>
    </>
  );
};

export default About;
