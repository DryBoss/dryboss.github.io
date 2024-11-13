import styles from "./intro.module.css";
import drybossLogo from "./../../../../../public/dryboss-logo.png";
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
        </div>
        <div className={styles.aboutMe}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ea
            dolorum aut doloribus eligendi velit architecto expedita dicta, non
            repellat, ipsam soluta suscipit pariatur. Ipsum repellat neque ex
            delectus modi? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            suscipit temporibus excepturi ipsa quod nam adipisci nulla vero,
            autem deleniti assumenda quis similique, eum vel dignissimos. Porro
            fugiat explicabo quidem!
          </p>
          <div className={styles.moreAboutMe}>
            <button>
              <a href="#about-me">more about me</a>
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
