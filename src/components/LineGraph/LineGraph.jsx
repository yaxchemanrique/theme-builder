import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import styles from "./LineGraph.module.css";

function LineGraph() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles[theme]} ${styles.lineGraph}`}>
      <div className={styles.textContent}>
        <h2>Total Revenue</h2>
        <p>$237,480.00</p>
      </div>
      <div className={styles.graph}>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
      </div>
    </div>
  );
}

export default LineGraph;
