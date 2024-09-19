import styles from "./AboutMe.module.css";
import educationLogo from "./../../../../assets/icons/education.svg";
import workLogo from "./../../../../assets/icons/work.svg";

import skills from "./../../../../database/myself.js";

function AboutMe() {
  return (
    <div className={`${styles.aboutMe} home-section`} id="about-me">
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
      </div>
      <div className={styles.additionalSection}>
        <div className={styles.skills}>
          <h3>Skills:</h3>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              {skill.map((subSkill, index) => (
                <p key={index}>{subSkill}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
