import { useState } from "react";
import styles from "./Menu.module.css";

import menuIcon from "./../../../../assets/icons/menu.svg";
import cancelIcon from "./../../../../assets/icons/cancel.svg";
import drybossLogo from "./../../../../assets/dryboss-logo.png";
import facebookLogo from "./../../../../assets/icons/facebook.svg";
import linkedinLogo from "./../../../../assets/icons/linkedin.svg";
import githubLogo from "./../../../../assets/icons/github.svg";

function Menu({ showMenuPC, sections }) {
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
        } ${showMenuMobile && showMenuPC ? styles.iconUp : ""}`}
        onClick={handleMenuIconClick}
      />
      <div
        className={`menu-pc ${styles.menubar} ${
          showMenuPC ? styles.showMenuPc : ""
        } ${showMenuMobile && showMenuPC ? styles.showMenuMobile : ""}`}
      >
        <a href="#intro" className={styles.title}>
          <img src={drybossLogo} alt="dryboss" />
          <h1>Mohammad Taiham</h1>
        </a>
        <div className={styles.menu}>
          {sections.map((section, index) =>
            index > 1 ? (
              <button key={index}>
                <a href={`#${section}`}>{section}</a>
              </button>
            ) : (
              ""
            )
          )}
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
