import React from "react";
import styles from "./SidebarLink.module.css"
import Icon from "../Icon/Icon.jsx";

function SidebarLink({ children, icon, settings, selected = false }) {
  const className =`${styles[settings.theme]} ${styles.sidebarLink} ${selected ? styles.selected : ''}`;
  let colorIcon = null;
  if(selected && settings.theme === 'light') {
    colorIcon = 900;
  } else if(selected && settings.theme === 'dark') {
    colorIcon = 300;
  } else if(!selected && settings.theme === 'light') {
    colorIcon = 950;
  } else if(!selected && settings.theme === 'dark') {
    colorIcon = 50;
  }

  return (
    <div className={className}>
      <span className={styles.iconContainer}>
        <Icon type={settings.iconStyle} theme={settings.theme} name={icon} color={colorIcon} />
      </span>
      <span>{children}</span>
    </div>
  );
}

export default SidebarLink;
