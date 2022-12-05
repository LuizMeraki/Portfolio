import styles from "./style.module.css";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.menu} max-width container-padding`}>
        <a href="#"><span className="green-text">Luiz</span> Henrique</a>
        <nav>
          <a href="#projects"><span className="green-text">Projetos</span></a>
          <a href="#skills">Habilidades</a>
          <a href="#about">Sobre</a>
          <a href="#contact"><span className="green-text">Contato</span></a>
        </nav>
      </div>
    </header>
  );
}
