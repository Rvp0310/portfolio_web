import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    src: "/graphic_editor_v1.mp4",
    title: "Graphic Editor",
    description:
      "A browser-based design tool inspired by Canva, supporting real-time editing with layers, shapes, text, and image manipulation for a smooth creative workflow.",
    techstack: [
      "Next.js", "MongoDB", "Fabric.js", "Material UI", "Bootstrap"
    ],
    repo_link: "https://github.com/Rvp0310/Graphic_Editor",
    live_link: "https://graphic-editor-smeargle.vercel.app",
  },
  {
    src: "/smart_home_energy_demo.mp4",
    title: "Smart Home Energy Optimization System",
    description:
      "A predictive web application that forecasts household energy consumption and provides insights to prevent excessive usage.",
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
      "An interactive platform that demonstrates classic algorithms through animated, step-by-step visualizations to simplify learning and teaching.",
    techstack: [
      "React",
      "Bootstrap",
      "Material UI"
    ],
    repo_link: "https://github.com/Rvp0310/Algorithm_Visualiser",
    live_link: "",
  },
];

const Projects = () => {
  return (
    <div className="card-stack">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;
