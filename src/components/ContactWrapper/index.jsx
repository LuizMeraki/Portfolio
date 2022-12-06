import styles from "./style.module.css";


export const ContactWrapper = ({ logo: Logo, contactName, goTo }) => {
  return (
    <div className={styles.container}>
      <Logo />
      <a href={goTo} target="_blank">{contactName}</a>
    </div>
  )
}