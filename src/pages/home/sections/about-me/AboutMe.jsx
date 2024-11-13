import styles from "./AboutMe.module.css";
import locationLogo from "./../../../../assets/icons/location.svg";
import educationLogo from "./../../../../assets/icons/education.svg";
import workLogo from "./../../../../assets/icons/work.svg";
import instagramIcon from "./../../../../assets/icons/instagram.svg";
import discordIcon from "./../../../../assets/icons/discord.svg";

import catImage from "./../../../../assets/images/cat.png";
import controllerImage from "./../../../../assets/images/controller.png";
import meowSound from "./../../../../assets/sounds/meow.mp3";

import { hobbies, funFacts, thoughts } from "./../../../../database/myself.js";
import { useState, useEffect } from "react";

function AboutMe({ isInView }) {
  const [catLurk, setCatLurk] = useState(false);
  const [giveController, setGiveController] = useState(false);
  const [randomFact, setRandomFact] = useState("");
  const [randomThought, setRandomThought] = useState("");

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

  useEffect(() => {
    const updateRandom = () => {
      const randomIndex1 = Math.floor(Math.random() * funFacts.length);
      setRandomFact(funFacts[randomIndex1]);
      const randomIndex2 = Math.floor(Math.random() * thoughts.length);
      setRandomThought(thoughts[randomIndex2]);
    };

    // Set an initial fact
    updateRandom();

    // Change the fact every 5 seconds (5000ms)
    const intervalId = setInterval(updateRandom, 5000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures it runs once on mount

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
        onClick={() => handleCatsClick()}
      />
      <div className={styles.coreSection}>
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
      <div className={styles.additionalSection}>
        <div className={styles.hobbies}>
          <h3>things I like,</h3>
          {hobbies.map((hobby, index) => (
            <p
              key={index}
              className={styles[hobby]}
              onMouseEnter={() => {
                hobby == "cats" ? handleCatsHover() : "";
              }}
              onMouseLeave={() => {
                hobby == "cats" ? setCatLurk(false) : "";
              }}
              onClick={() => {
                hobby == "cats"
                  ? handleCatsClick()
                  : hobby == "gaming"
                  ? handleGamingClick()
                  : "";
              }}
            >
              {hobby}
            </p>
          ))}
        </div>
        <div className={styles.funFact}>
          <p>{randomFact}</p>
        </div>
        <div className={styles.thought}>
          <p>{randomThought}</p>
        </div>
        <div className={styles.socials}>
          <a href="">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a href="">
            <img src={discordIcon} alt="discord" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
