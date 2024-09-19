import styles from "./AboutMe.module.css";
import educationLogo from "./../../../../assets/icons/education.svg";

function AboutMe() {
  return (
    <div className="home-section" id="more-about-me">
      <div className={styles.coreSection}>
        <h1>
          Hi, I am <span>Mohammad Taiham</span>
          <br />
          aka <span>DryBoss</span>
        </h1>
        <div className={styles.detailWithIcon}>
          <img src={educationLogo} alt="education" />
          <b style={{ margin: "0 8px 0 0" }}>
            Founder & Content Writer
          </b> at <b style={{ margin: "0 8px" }}>The Math Project</b>
        </div>
        <div className={styles.detailWithIcon}>
          <img src={educationLogo} alt="education" /> Graduating in{" "}
          <b style={{ margin: "0 8px" }}>Mathematics</b> at{" "}
          <b style={{ margin: "0 8px" }}>University of Chittagong</b>
        </div>
      </div>
      <div>
        <h3>Skills:</h3>
      </div>
    </div>
  );
}

export default AboutMe;
