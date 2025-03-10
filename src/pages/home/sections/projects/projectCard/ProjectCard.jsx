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
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <p className={styles.tag} key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
