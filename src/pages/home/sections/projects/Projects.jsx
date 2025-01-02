import { useState, useEffect } from "react";
import styles from "./Projects.module.css";

import rover from "./../../../../assets/images/rover.png";

function Projects({ roverAppear }) {
  return (
    <div className="home-section" id="projects">
      <h2 className="hidden">projects</h2>
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
