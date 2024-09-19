import styles from "./intro.module.css";
import drybossLogo from "./../../../../../public/dryboss-logo.png";

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
            <button>more about me</button>
            <button>Download CV</button>
          </div>
          <div className={styles.socials}>
            <img src="" alt="facebook" />
            <img src="" alt="linkedin" />
            <img src="" alt="github" />
            <img src="" alt="twitter" />
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
