import { useState, useRef, useEffect } from "react";

import Menu from "./sections/menu/Menu";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/about-me/AboutMe";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function Home() {
  const [showMenuPC, setShowMenuPC] = useState(false);
  const [isAboutMeInView, setIsAboutMeInView] = useState(false);
  const [roverProgress, setRoverProgress] = useState(-20);
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

    // Calculate the percentage of the section that is visible in the viewport
    const sectionTopVisible = Math.min(
      Math.max(0, (viewportHeight - sectionTop) / sectionHeight),
      1
    );
    const sectionBottomVisible = Math.min(
      Math.max(
        0,
        (viewportHeight - (sectionTop + sectionHeight)) / sectionHeight
      ),
      1
    );

    // The section scroll progress should be based on both the top and bottom visibility
    const sectionScrollProgress =
      Math.min(
        Math.max(0, sectionTopVisible + sectionBottomVisible - 0.5), // Normalize to 50% visibility for both top and bottom
        1
      ) * 140; // Multiply by 100 for 0 to 100 range

    // Log or use the progress
    setRoverProgress(sectionScrollProgress - 22.5);
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutMeInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.5 } // 75% of the div must be in view to trigger
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
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Home;
