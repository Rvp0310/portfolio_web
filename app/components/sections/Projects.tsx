import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    src: "/smart_home_energy_demo.mp4",
    title: "Smart Home Energy Optimization",
    description:
      "A Flask-based web application that predicts future energy consumption for smart home devices using a deep learning time-series model and suggest tips to avoid alarmingly high consumption.",
    techstack: [
      "Python",
      "Flask",
      "Pandas",
      "Numpy",
      "TensorFlow",
      "Bootstrap"
    ],
    repo_link: "https://github.com/Rvp0310/Smart_Home_Energy_Web",
    live_link: "https://smart-home-energy-consumption-monitoring.onrender.com",
  },
  {
    src: "/Visualizer_v2.5.mp4",
    title: "Algorithm Visualizer",
    description:
      "A sleek, dark-themed algorithm visualizer built with React, Next.js, Tailwind, Material UI, and Redux Toolkit. The platform lets users explore classic algorithms through animated, step-by-step visualizations — good for learning, and teaching.",
    techstack: [
      "React",
      "Bootstrap",
      "Material UI"
    ],
    repo_link: "https://github.com/Rvp0310/Algorithm_Visualiser",
    live_link: "",
  },
  {
    src: "/Visualizer_v2.5.mp4",
    title: "Graphic Editor",
    description:
      "A Canva-inspired online editor built using the Next Full-stack. It focuses on a seamless design experience with support for layers, shapes, text, and image manipulation — all running in real time.",
    techstack: [
      "Next.js", "MongoDB", "Fabric.js", "Material UI", "bootstrap"
    ],
    repo_link: "https://github.com/Rvp0310/Graphic_Editor",
    live_link: "https://graphic-editor-smeargle.vercel.app",
  },
];

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </>
  );
};

export default Projects;
