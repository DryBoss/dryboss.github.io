import styles from "./AboutMe.module.css";
import locationLogo from "./../../../../assets/icons/location.svg";
import educationLogo from "./../../../../assets/icons/education.svg";
import workLogo from "./../../../../assets/icons/work.svg";
import catImage from "./../../../../assets/images/cat.png";
import meowSound from "./../../../../assets/sounds/meow.mp3";

import hobbies from "./../../../../database/myself.js";
import { useState } from "react";

function AboutMe() {
  const [catLurk, setCatLurk] = useState(false);

  const meow = new Audio(meowSound);
  meow.volume = 0.01;

  function HandleCatsHover() {
    setCatLurk(true);
    meow.play();
  }

  return (
    <div className={`${styles.aboutMe} home-section`} id="about-me">
      <img
        src={catImage}
        alt="cat"
        className={`${styles.catImage} ${catLurk ? styles.catImageLurk : ""}`}
      />
      <div className={styles.coreSection}>
        <h1>
          Hi, I am <span>Mohammad Taiham</span>
          <br />
          aka <span>DryBoss</span>
        </h1>
        <div className={styles.detailWithIcon}>
          <img src={workLogo} alt="education" />
          <p>
            <b>Founder, Developer & Technical Writer</b> at{" "}
            <b>The Math Project</b>
          </p>
        </div>
        <div className={styles.detailWithIcon}>
          <img src={educationLogo} alt="education" />
          <p>
            Graduating in <b>Mathematics</b> at <b>University of Chittagong</b>
          </p>
        </div>
        <div className={styles.detailWithIcon}>
          <img src={locationLogo} alt="education" />
          <p>
            From & living in <b>Chittagong, Bangladesh</b>
          </p>
        </div>
      </div>
      <div className={styles.additionalSection}>
        <div className={styles.hobbies}>
          <h3>things I like,</h3>
          {hobbies.map((hobby, index) => (
            <p
              key={index}
              className={styles[hobby]}
              onMouseEnter={() => {
                hobby == "cats" ? HandleCatsHover() : "";
              }}
              onMouseLeave={() => (hobby == "cats" ? setCatLurk(false) : "")}
            >
              {hobby}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
