import Curriculum from "../../downloads/curriculum.pdf";

import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import styles from "./style.module.css";


export const DownloadButton = () => {
  return (
    <div className={styles.container}>
      <label>Currículo</label>
      <a href={Curriculum} download="Currículo - Luiz Henrique.pdf">
        <BsFillFileEarmarkArrowDownFill />
      </a>
    </div>
  )
}