import styles from "./intro.module.css";
import drybossLogo from "./../../../../../public/dryboss-logo.png";
import facebookLogo from "./../../../../assets/icons/facebook.svg";
import linkedinLogo from "./../../../../assets/icons/linkedin.svg";
import githubLogo from "./../../../../assets/icons/github.svg";

function Intro() {
  return (
    <div className="home-section">
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
            <a href="">blogs</a>
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
      <div className={styles.featured}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit,
        maiores harum cumque necessitatibus possimus quas tempore qui facere
        facilis corrupti recusandae veritatis reprehenderit beatae consequuntur
        vel, aut pariatur at!
      </div>
    </div>
  );
}

export default Intro;
