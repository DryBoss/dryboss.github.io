import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={`${styles.section} home-section`}>
      <h1>
        Hi, I am <span>Mohammad Taiham</span>
        <br />
        aka <span>DryBoss</span>
      </h1>
      <div className={styles.subSections}>
        <div>
          <div>
            <img src="" alt="education" /> Graduating in Mathematics from
            University of Chittagong
          </div>
        </div>
        <div>
          <h3>Skills:</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
