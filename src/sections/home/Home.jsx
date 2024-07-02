import styles from "./Home.module.css";
import dryBossLogo from "../../assets/images/dryboss-logo.png";

export default function Home() {
  return (
    <div className="section">
      <div className="intro">
        <div className={styles.title}>
          <img src={dryBossLogo} alt="DryBoss Logo" className={styles.logo} />
          <h1>
            Hi, I am<span> Mohammad Taiham</span>
            <br />
            aka<span> DryBoss</span>
          </h1>
        </div>
        <div className="about-me">
          <div>
            I am an undergraduate Mathematics student at the University of
            Chittagong, with a keen interest in leveraging technology and data
            to solve complex problems.
          </div>
          <div>
            Specializing in frontend web development with JavaScript and
            React.js, I am also expanding my expertise in data analysis, backend
            development, and software development. This continuous learning
            equips me with a versatile skill set for various tech challenges.
          </div>
          <div>
            My research interests include exploring Artificial Intelligence and
            Big Data to drive innovation and address real-world issues.
          </div>
          <div>
            I actively contribute to several open source and private projects,
            fostering collaboration and continuous learning.
          </div>
          <div>
            In my leisure time, I enjoy playing games, which enhance my
            creativity and strategic thinking. cd
          </div>
        </div>
        <div className="more-about-me">
          <button>more about me</button>
          <button>resume</button>
        </div>
        <div className="socials"></div>
      </div>
      <div className="menu"></div>
    </div>
  );
}
