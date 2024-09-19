import Intro from "./sections/intro/intro";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
