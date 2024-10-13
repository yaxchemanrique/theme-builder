import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeProvider.jsx";

import styles from "./SidebarLink.module.css";
import Icon from "../Icon/Icon.jsx";

function SidebarLink({ children, iconName, selected = false }) {
  const { theme, iconStyle } = useContext(ThemeContext);

  const className = `${styles[theme]} ${styles.sidebarLink} ${
    selected ? styles.selected : ""
  }`;
  let colorIcon = null;

  if (selected && theme === "light") {
    colorIcon = 900;
  } else if (selected && theme === "dark") {
    colorIcon = 300;
  } else if (!selected && theme === "light") {
    colorIcon = 950;
  } else if (!selected && theme === "dark") {
    colorIcon = 50;
  }

  return (
    <div className={className}>
      <span className={styles.iconContainer}>
        <Icon
          type={iconStyle}
          theme={theme}
          name={iconName}
          color={colorIcon}
        />
      </span>
      <span>{children}</span>
    </div>
  );
}

export default SidebarLink;
