import React from "react";
import styles from "./SidebarLink.module.css"
import Icon from "../Icon/Icon.jsx";

function SidebarLink({ children, icon, iconType, selected = false }) {
  let className = selected ? `${styles.sidebarLink} ${styles.selected}` : styles.sidebarLink;
  let colorIcon = selected ? '900' : undefined;

  return (
    <div className={className}>
      <span className={styles.iconContainer}>
        <Icon type={iconType} theme="light" name={icon} color={colorIcon} />
      </span>
      <span>{children}</span>
    </div>
  );
}

export default SidebarLink;
