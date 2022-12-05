import styles from "./style.module.css";


export const ProjectCard = ({ cardTitle, cardImage, cardDescription, cardWebsite, cardGithub }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.projectName} ${styles.cardPadding}`}>
        <h4>{cardTitle}</h4>
      </div>
      <figure className={styles.projectImage}>
        <img src={cardImage} alt="Capa Netflix"></img>
      </figure>
      <div className={`${styles.projectDescription} ${styles.cardPadding}`}>
        <p>{cardDescription}</p>
      </div>
      <div className={styles.cardLinks}>
        <a href={cardWebsite} target="_blank">Site do projeto</a>
        <a href={cardGithub} target="_blank">Github</a>
      </div>
    </div>
  );
}
