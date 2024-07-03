import styles from "./Home.module.css";
import dryBossLogo from "./../../assets/images/dryboss-logo.png";
import facebookLogo from "./../../assets/icons/facebook.svg";
import instagramLogo from "./../../assets/icons/instagram.svg";
import xLogo from "./../../assets/icons/x.svg";
import linkedinLogo from "./../../assets/icons/linkedin.svg";
import githubLogo from "./../../assets/icons/github.svg";

export default function Home() {
  return (
    <>
      <div className="section" id="home">
        <div className={styles.intro}>
          <div className={styles.title}>
            <img src={dryBossLogo} alt="DryBoss Logo" className={styles.logo} />
            <h1>
              <span>Mohammad Taiham</span>
              <br />
              Web developer
            </h1>
          </div>
          <div className={styles.menu}>
            <a href="#projects">projects</a>
            <a href="">writings</a>
            <a href="">achievements</a>
          </div>
          <div className={styles.aboutMe}>
            <p>
              I am an undergraduate Mathematics student at the University of
              Chittagong, passionate about leveraging technology and data.
              <br /> <br />I specialize in frontend development with JavaScript
              and React.js and am expanding into data analysis and backend
              development. My research focuses on AI and Big Data.
              <br /> <br />I actively contribute to various projects and enjoy
              gaming to enhance creativity and strategic thinking
              <br />
            </p>
            <div className={styles.moreAboutMe}>
              <button>More about me</button>
              <button>Download CV</button>
            </div>
            <div className={styles.socials}>
              <img src={facebookLogo} alt="facebook" />
              <img src={instagramLogo} alt="instagram" />
              <img src={xLogo} alt="x" />
              <img src={linkedinLogo} alt="linkedin" />
              <img src={githubLogo} alt="github" />
            </div>
          </div>
        </div>
        <div className={styles.featured}>
          <div className="latest-blog">
            <h3>latest blog post</h3>
            <p>Why you are stupid?</p>
          </div>
        </div>
      </div>
      <div className="section" id="projects">
        <div className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
