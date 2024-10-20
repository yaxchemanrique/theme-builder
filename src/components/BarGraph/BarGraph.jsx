import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import styles from "./BarGraph.module.css";

function BarGraph() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles[theme]} ${styles.barGraph}`}>
      <div className={styles.textContent}>
        <h2>Subscriptions</h2>
        <p>+2,345</p>
      </div>
      <div className={styles.graph}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}

export default BarGraph;
