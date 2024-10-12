import styles from "./ColorCard.module.css";
import { hslToHex } from "../colorUtils.js";

function ColorCard({ color }) {
  const hexCode = hslToHex(color.code);
  return (
    <div
      className={styles.colorCard}
      style={{
        backgroundColor: `var(--clr-accent-${color.number})`,
        color: `${
          color.number >= 500 ? "var(--clr-accent-50)" : "var(--clr-accent-950)"
        }`,
      }}
    >
      <p className={styles.colorNumber}>{color.number}</p>
      <p className={styles.colorCode}>#{hexCode}</p>
    </div>
  );
}

export default ColorCard;
