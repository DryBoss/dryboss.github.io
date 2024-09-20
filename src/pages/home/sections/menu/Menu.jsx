import styles from "./Menu.module.css";
import drybossLogo from "./../../../../../public/dryboss-logo.png";
import facebookLogo from "./../../../../assets/icons/facebook.svg";
import linkedinLogo from "./../../../../assets/icons/linkedin.svg";
import githubLogo from "./../../../../assets/icons/github.svg";

function Menu({ showMenu }) {
  return (
    <div
      className={`menu-pc ${styles.menuPc} ${
        showMenu ? styles.showMenuPc : ""
      }`}
    >
      <div className={styles.title}>
        <img src={drybossLogo} alt="dryboss" />
        <h1>Mohammad Taiham</h1>
      </div>
      <div className={styles.menu}>
        <button>
          <a href="#projects">projects</a>
        </button>
        <button>
          <a href="">blogs</a>
        </button>
      </div>
      <button className={styles.resume}>
        <a href="">resume</a>
      </button>
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
  );
}

export default Menu;
