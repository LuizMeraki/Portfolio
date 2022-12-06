import styles from "./style.module.css";


export const ProjectCard = ({ name, image, description, deploy, github }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.projectName} ${styles.cardPadding}`}>
        <h4>{name}</h4>
      </div>
      <figure className={styles.projectImage}>
        <img src={image} alt={name}></img>
      </figure>
      <div className={`${styles.projectDescription} ${styles.cardPadding}`}>
        <p>{description}</p>
      </div>
      <div className={styles.cardLinks}>
        <a href={deploy} target="_blank">Site do projeto</a>
        <a href={github} target="_blank">Github</a>
      </div>
    </div>
  );
}
