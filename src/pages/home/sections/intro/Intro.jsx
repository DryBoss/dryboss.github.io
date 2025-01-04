import styles from "./intro.module.css";
import drybossLogo from "./../../../../assets/dryboss-logo.png";
import facebookLogo from "./../../../../assets/icons/facebook.svg";
import linkedinLogo from "./../../../../assets/icons/linkedin.svg";
import githubLogo from "./../../../../assets/icons/github.svg";

function Intro({ sections }) {
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
          {sections.map((section, index) =>
            index > 2 ? (
              <button key={index}>
                <a href={`#${section}`}>{section}</a>
              </button>
            ) : (
              ""
            )
          )}
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
