import { useState, useEffect } from "react";
import styles from "./PageTransition.module.css";

function PageTransition({ title, animation }) {
  const [currentAnimation, setCurrentAnimation] = useState("none");

  useEffect(() => {
    if (animation === "appear") {
      setCurrentAnimation("appear");
      const timer = setTimeout(() => {
        setCurrentAnimation("disappear");
      }, 1000);
      return () => clearTimeout(timer);
    } else if (animation === "none") {
      const timer = setTimeout(() => {
        setCurrentAnimation("disappear");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [animation]);

  return (
    <div
      className={`home-section ${styles.transitionPage} ${
        currentAnimation == "appear"
          ? styles.appear
          : currentAnimation == "disappear"
          ? styles.disappear
          : ""
      }`}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default PageTransition;
