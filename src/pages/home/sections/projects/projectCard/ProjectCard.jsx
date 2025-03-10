import styles from "./ProjectCard.module.css";

function ProjectCard({ bgImg, title, description, tags }) {
  return (
    <div
      className={`hidden ${styles.card}`}
      style={{
        "--bgImg": `url(${bgImg})`,
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
