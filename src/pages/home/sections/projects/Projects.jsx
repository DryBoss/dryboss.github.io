import { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./projectCard/ProjectCard";
import Wave from "../../Wave";

import { projects } from "../../../../database/data";
import rover from "./../../../../assets/images/rover.png";

function Projects({ roverAppear }) {
  return (
    <div className={`${styles.projects}`} id="projects">
      <h2 className="hidden">projects</h2>
      <div className={styles.projectShowcase}>
        {projects.showCase.map((project, index) => (
          <ProjectCard
            key={index}
            bgImg={project[0]}
            title={project[1]}
            description={project[2]}
            tags={project[3]}
          />
        ))}
      </div>
      <button className={styles.seeMore}>see more</button>
      <img
        src={rover}
        alt="Rover"
        className={`${styles.roverImage} ${
          roverAppear ? styles.roverImageAppear : ""
        }`}
      />
      <Wave
        id={3}
        height={50}
        colorOld={"#0a0c10"}
        colorNew={["#24292f", "#1d2025", "#15171b", "#0a0c10"]}
        waveCode={[
          "M0 463L39 261L78 409L117 385L157 133L196 121L235 429L274 246L313 167L352 385L391 145L430 114L470 511L509 463L548 263L587 307L626 213L665 80L704 99L743 13L783 467L822 137L861 477L900 255L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
          "M0 188L39 123L78 587L117 592L157 460L196 208L235 167L274 204L313 305L352 198L391 242L430 550L470 273L509 280L548 414L587 340L626 221L665 527L704 169L743 410L783 295L822 275L861 520L900 326L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
          "M0 273L39 566L78 356L117 269L157 305L196 430L235 571L274 571L313 342L352 248L391 360L430 482L470 442L509 463L548 510L587 348L626 298L665 527L704 594L743 348L783 533L822 386L861 549L900 391L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
          "M0 482L39 456L78 425L117 515L157 430L196 582L235 590L274 574L313 404L352 498L391 448L430 361L470 538L509 414L548 533L587 376L626 359L665 433L704 560L743 495L783 404L822 574L861 511L900 540L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
        ]}
      />
    </div>
  );
}

export default Projects;
