import MenuPc from "./sections/menu-pc/MenuPc";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/about-me/AboutMe";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function Home() {
  return (
    <div className="Home">
      <MenuPc />
      <Intro />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
