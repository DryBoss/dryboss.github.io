import { useState, useRef, useEffect } from "react";

import Menu from "./sections/menu/Menu";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/about-me/AboutMe";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function Home() {
  const [showMenuPC, setShowMenuPC] = useState(false);
  const [isAboutMeInView, setIsAboutMeInView] = useState(false);
  const [roverProgress, setRoverProgress] = useState(-10);
  const targetRef = useRef(null);

  function handleScroll() {
    const scrollProgress =
      (window.scrollY / document.documentElement.scrollHeight -
        window.innerHeight) *
      100;

    setShowMenuPC(
      window.scrollY >
        document.getElementById("intro").getBoundingClientRect().bottom
        ? true
        : false
    );

    const section = document.getElementById("projects");
    const sectionTop = section.getBoundingClientRect().top; // Top of the section relative to the viewport
    const sectionHeight = section.offsetHeight; // Total height of the section
    const viewportHeight = window.innerHeight; // Height of the viewport

    // Calculate the percentage scrolled through the section
    const sectionScrollProgress =
      Math.min(Math.max(0, (viewportHeight - sectionTop) / sectionHeight), 1) *
      120; // Clamp between 0 and 120

    // Log or use the progress
    setRoverProgress(sectionScrollProgress - 10);
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutMeInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.75 } // 75% of the div must be in view to trigger
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
      <Projects roverProgress={roverProgress} />
      <Footer />
    </div>
  );
}

export default Home;
