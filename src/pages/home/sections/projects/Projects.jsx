import { useState, useEffect } from "react";
import styles from "./projects.module.css";

import rover from "./../../../../assets/images/rover.png";

function Projects({ roverProgress }) {
  const [roverStyle, setRoverStyle] = useState({});

  useEffect(() => {
    // Dynamically update the rover's position based on roverProgress
    setRoverStyle({
      left: `${roverProgress}%`, // Update left position as a percentage
    });
  }, [roverProgress]);

  return (
    <div className="home-section" id="projects">
      <h2>projects</h2>
      <img
        src={rover}
        alt="Rover"
        className={styles.roverImage}
        style={roverStyle} // Pass the updated style dynamically
      />
    </div>
  );
}

export default Projects;
