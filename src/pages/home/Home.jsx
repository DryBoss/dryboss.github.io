import { useState, useRef, useEffect } from "react";

import Menu from "./sections/menu/Menu";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/about-me/AboutMe";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function Home() {
  const [showMenuPC, setShowMenuPC] = useState(false);
  const [isAboutMeInView, setIsAboutMeInView] = useState(false);
  const targetRef = useRef(null);

  function handleScroll() {
    if (
      window.scrollY >
      document.getElementById("intro").getBoundingClientRect().bottom
    ) {
      setShowMenuPC(true);
    } else {
      setShowMenuPC(false);
    }
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutMeInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.75 } // 50% of the div must be in view to trigger
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="Home">
      <Menu showMenuPC={showMenuPC} />
      <Intro />
      <div ref={targetRef}>
        <AboutMe isInView={isAboutMeInView} />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
