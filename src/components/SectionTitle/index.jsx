import styles from "./style.module.css";


export const SectionTitle = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  )
}