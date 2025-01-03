import { useState } from "react";
import styles from "./Menu.module.css";

import menuIcon from "./../../../../assets/icons/menu.svg";
import cancelIcon from "./../../../../assets/icons/cancel.svg";
import drybossLogo from "./../../../../assets/dryboss-logo.png";
import facebookLogo from "./../../../../assets/icons/facebook.svg";
import linkedinLogo from "./../../../../assets/icons/linkedin.svg";
import githubLogo from "./../../../../assets/icons/github.svg";

function Menu({ showMenuPC }) {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  function handleMenuIconClick() {
    setShowMenuMobile(!showMenuMobile);
  }
  return (
    <>
      <img
        src={showMenuMobile ? cancelIcon : menuIcon}
        alt="menu"
        className={`menu-pc ${styles.menuButton} ${
          showMenuPC ? styles.showMenuButton : ""
        }`}
        onClick={handleMenuIconClick}
      />
      <div
        className={`menu-pc ${styles.menubar} ${
          showMenuPC ? styles.showMenuPc : ""
        } ${showMenuMobile && showMenuPC ? styles.showMenuMobile : ""}`}
      >
        <div className={styles.title}>
          <img src={drybossLogo} alt="dryboss" />
          <h1>Mohammad Taiham</h1>
        </div>
        <div className={styles.menu}>
          <button>
            <a href="#wave1">about me</a>
          </button>
          <button>
            <a href="#projects">projects</a>
          </button>
          <button>
            <a href="#achievements">achievements</a>
          </button>
        </div>
        <button className={styles.resume}>
          <a href="">resume</a>
        </button>
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
    </>
  );
}

export default Menu;
