import { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./projectCard/ProjectCard";

import { projects } from "../../../../database/data";
import rover from "./../../../../assets/images/rover.png";

function Projects({ roverAppear }) {
  return (
    <div className={`home-section ${styles.projects}`} id="projects">
      <h2 className="hidden">projects</h2>
      <div className={styles.projectShowcase}>
        {projects.showCase.map((project, index) => (
          <ProjectCard key={index} title={project[0]} tags={project[2]} />
        ))}
      </div>
      <img
        src={rover}
        alt="Rover"
        className={`${styles.roverImage} ${
          roverAppear ? styles.roverImageAppear : ""
        }`}
      />
    </div>
  );
}

export default Projects;
