import styles from "./AboutMe.module.css";
import locationLogo from "./../../../../assets/icons/location.svg";
import educationLogo from "./../../../../assets/icons/education.svg";
import workLogo from "./../../../../assets/icons/work.svg";
import instagramIcon from "./../../../../assets/icons/instagram.svg";
import discordIcon from "./../../../../assets/icons/discord.svg";

import catImage from "./../../../../assets/images/cat.png";
import controllerImage from "./../../../../assets/images/controller.png";
import meowSound from "./../../../../assets/sounds/meow.mp3";

import { myself } from "./../../../../database/data.js";
import { useState, useEffect } from "react";

function AboutMe({ isInView }) {
  const [catLurk, setCatLurk] = useState(false);
  const [giveController, setGiveController] = useState(false);

  const meow = new Audio(meowSound);
  meow.volume = 0.1;

  useEffect(() => {
    if (isInView) {
      setCatLurk(true);
    } else {
      setCatLurk(false);
    }
  }, [isInView]);

  function handleGamingClick() {
    setGiveController(!giveController);
  }

  return (
    <div className={`${styles.aboutMe} home-section`} id="about-me">
      <img
        src={controllerImage}
        alt="controller"
        className={`${styles.controllerImage} ${
          giveController ? styles.controllerGive : ""
        }`}
      />
      <img
        src={catImage}
        alt="cat"
        className={`${styles.catImage} ${catLurk ? styles.catImageLurk : ""}`}
      />
      <div className={`${styles.coreSection} hidden`}>
        <h1>
          Hi, I am <span>Mohammad Taiham</span>
          <br />
          aka <span>DryBoss</span>
        </h1>
        <div className={styles.detailWithIcon}>
          <img src={workLogo} alt="education" />
          <p>
            <b>Founder, Developer & Technical Writer</b> at{" "}
            <b>The Math Project</b>
          </p>
        </div>
        <div className={styles.detailWithIcon}>
          <img src={educationLogo} alt="education" />
          <p>
            Graduating in <b>Mathematics</b> at <b>University of Chittagong</b>
          </p>
        </div>
        <div className={styles.detailWithIcon}>
          <img src={locationLogo} alt="education" />
          <p>
            From & living in <b>Chittagong, Bangladesh</b>
          </p>
        </div>
      </div>
      <div className={`${styles.additionalSection} hidden`}>
        <div className={styles.hobbies}>
          <h3>things I like,</h3>
          {myself.thingsILike.map((like, index) => (
            <p
              key={index}
              className={styles[like]}
              onClick={() => {
                like == "gaming" ? handleGamingClick() : "";
              }}
            >
              {like}
            </p>
          ))}
        </div>
        <div className={styles.socials}>
          <a href="">
            <img className="social" src={instagramIcon} alt="instagram" />
          </a>
          <a href="">
            <img className="social" src={discordIcon} alt="discord" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
