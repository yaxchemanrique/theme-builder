import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider.jsx";
import ColorCard from "../ColorCard/ColorCard.jsx";
import styles from "./ColorCardsContainer.module.css";

function ColorCardsContainer() {
  const {themeColors} = useContext(ThemeContext);
  const cardsThemeColors = themeColors.slice(1, -1);

  return (
    <div className={styles.colorCardsContainer}>
      <div className={styles.colorCardsContainerInfo}>
        <p>nombre del color</p>
        <button>exportar</button>
      </div>
      <div className={styles.colorsContainer}>
        {cardsThemeColors.map((color) => (
          <ColorCard
            className={styles.colorCardsContainer}
            color={color}
            key={color.number}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorCardsContainer;
