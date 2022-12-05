import styles from "./style.module.css";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerArea} max-width`}>
        <p>&#169; 2022 Portfólio - Luiz Henrique</p>
      </div>
    </footer>
  );
}
