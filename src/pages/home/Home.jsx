import { useState, useEffect } from "react";

import Menu from "./sections/menu/Menu";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/about-me/AboutMe";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function Home() {
  const [showMenuPC, setShowMenuPC] = useState(false);

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

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <Menu showMenuPC={showMenuPC} />
      <Intro />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
