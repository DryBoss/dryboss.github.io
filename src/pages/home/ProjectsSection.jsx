import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ setCurrentPage }) {
  return (
    <div className="section" id="projects">
      <div className="projects">
        <h2>Projects</h2>
        <button onClick={() => setCurrentPage("projects")}>
          More projects
        </button>
      </div>
    </div>
  );
}
