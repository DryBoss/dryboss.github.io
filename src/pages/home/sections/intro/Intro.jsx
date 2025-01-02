import styles from "./intro.module.css";
import drybossLogo from "./../../../../assets/dryboss-logo.png";
import facebookLogo from "./../../../../assets/icons/facebook.svg";
import linkedinLogo from "./../../../../assets/icons/linkedin.svg";
import githubLogo from "./../../../../assets/icons/github.svg";

import jsLogo from "./../../../../assets/icons/js.svg";
import pythonLogo from "./../../../../assets/icons/python.svg";
import reactLogo from "./../../../../assets/icons/react.svg";
import pandasLogo from "./../../../../assets/icons/pandas.svg";
import scikitlearnLogo from "./../../../../assets/icons/scikit-learn.svg";

function Intro() {
  const techs = document.querySelectorAll(".techs");

  techs.forEach((tech) => {
    tech.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;

      let width = tech.clientWidth;
      let height = tech.clientHeight;

      let transX = x - width;
      let transY = y - height;

      tech.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    });
  });

  return (
    <div className="home-section" id="intro">
      <div className={styles.profile}>
        <div className={styles.header}>
          <img src={drybossLogo} alt="dryboss" />
          <div className={styles.title}>
            <h1>Mohammad Taiham</h1>
            <p>Web Developer</p>
          </div>
        </div>
        <div className={styles.menu}>
          <button>
            <a href="#projects">projects</a>
          </button>
          <button>
            <a href="#achievements">achievements</a>
          </button>
        </div>
        <div className={styles.aboutMe}>
          <p>
            I’m a passionate tech enthusiast with a strong foundation in data
            science, web development, quantum computing, and cryptography. I
            love solving problems and creating innovative solutions.
            <br />
            Beyond coding, I value curiosity and continuous learning, always
            aiming to make a meaningful impact through technology.
            <br />
            I enjoy gaming, experimenting with new recipes, and working on
            personal projects.
            <br />
            Feel free to explore my work, and let's connect if you'd like to
            collaborate!
          </p>

          <div className={styles.moreAboutMe}>
            <button>
              <a href="#wave1">more about me</a>
            </button>
            <button>
              <a href="">Download CV</a>
            </button>
          </div>
          <div className={styles.socials}>
            <a href="">
              <img src={facebookLogo} alt="facebook" />
            </a>
            <a href="">
              <img src={linkedinLogo} alt="linkedin" />
            </a>
            <a href="">
              <img src={githubLogo} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.featured}></div>
    </div>
  );
}

export default Intro;
