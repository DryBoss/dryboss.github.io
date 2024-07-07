import IntroSection from "./IntroSection";
import ProjectsSection from "./ProjectsSection";

export default function Home({ setCurrentPage }) {
  return (
    <>
      <IntroSection />
      <ProjectsSection setCurrentPage={setCurrentPage} />
    </>
  );
}
