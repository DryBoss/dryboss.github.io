import { useState, useEffect } from "react";
import styles from "./PageTransition.module.css";

function PageTransition({ title, animation }) {
  const [currentAnimation, setCurrentAnimation] = useState(animation);

  useEffect(() => {
    if (animation === "appear") {
      setCurrentAnimation("appear");
      const timer1 = setTimeout(() => {
        setCurrentAnimation("disappear");
      }, 1500);
      return () => clearTimeout(timer1);
    } else if (animation === "none") {
      const timer2 = setTimeout(() => {
        setCurrentAnimation("disappear");
      }, 1500);
      return () => clearTimeout(timer2);
    }
  }, [animation]);

  return (
    <div
      className={`${styles.transitionPage} ${
        currentAnimation == "appear"
          ? styles.appear
          : currentAnimation == "disappear"
          ? styles.disappear
          : ""
      }`}
    >
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default PageTransition;
