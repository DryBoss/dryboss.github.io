import { useState, useRef, useEffect } from "react";

import Wave from "./Wave";
import Menu from "./sections/menu/Menu";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/about-me/AboutMe";
import Projects from "./sections/projects/Projects";
import Achievements from "./sections/achievements/achievements";

function Home() {
  const [showMenuPC, setShowMenuPC] = useState(false);
  const [isAboutMeInView, setIsAboutMeInView] = useState(false);
  const [roverAppear, setRoverAppear] = useState(false);
  const targetRef = useRef(null);
  const roverRef = useRef(null); // Ref for Projects section

  function handleScroll() {
    setShowMenuPC(
      window.scrollY >
        document.getElementById("intro").getBoundingClientRect().bottom
        ? true
        : false
    );

    const elements = document.querySelectorAll(".hidden");

    elements.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add("visible");
      }
    });
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    const aboutMeObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAboutMeInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.5 } // 50% of the div must be in view to trigger
    );

    const roverObserver = new IntersectionObserver(
      ([entry]) => {
        setRoverAppear(entry.isIntersecting); // Update state for rover appearance
      },
      { threshold: 0.5 } // 50% of the Projects section must be in view
    );

    if (targetRef.current) {
      aboutMeObserver.observe(targetRef.current);
    }

    if (roverRef.current) {
      roverObserver.observe(roverRef.current);
    }

    // Clean up observers on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (targetRef.current) {
        aboutMeObserver.unobserve(targetRef.current);
      }
      if (roverRef.current) {
        roverObserver.unobserve(roverRef.current);
      }
    };
  }, []);

  return (
    <div className="Home">
      <Menu showMenuPC={showMenuPC} />
      <Intro />
      <div ref={targetRef} styles={"display: flex"}>
        <AboutMe isInView={isAboutMeInView} />
      </div>
      <div ref={roverRef}>
        <Projects roverAppear={roverAppear} />
      </div>
      <Achievements />
    </div>
  );
}

export default Home;
