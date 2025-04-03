import styles from "./intro.module.css";
import { website, myself } from "../../../../database/data";

import drybossLogo from "./../../../../assets/dryboss-logo.png";
import facebookLogo from "./../../../../assets/icons/facebook.svg";
import linkedinLogo from "./../../../../assets/icons/linkedin.svg";
import githubLogo from "./../../../../assets/icons/github.svg";

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
            <p>Developer | Data scientist</p>
          </div>
        </div>
        <div className={styles.menu}>
          {website.menuItems.map((section, index) => (
            <button key={index}>
              <a href={`#${section}`}>{section}</a>
            </button>
          ))}
        </div>

        <div className={styles.aboutMe}>
          <p>
            {myself.bio.map((text, index) => (
              <span key={index}>
                {text}
                {index < myself.bio.length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className={styles.moreAboutMe}>
            <button>
              <a href="#about-me">more about me</a>
            </button>
            <button>
              <a href="">resume</a>
            </button>
          </div>
          <div className={styles.socials}>
            <a href="">
              <img className="social" src={facebookLogo} alt="facebook" />
            </a>
            <a href="">
              <img className="social" src={linkedinLogo} alt="linkedin" />
            </a>
            <a href="">
              <img className="social" src={githubLogo} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.featured}></div>
    </div>
  );
}

export default Intro;
