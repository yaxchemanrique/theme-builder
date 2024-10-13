import Icon from "../Icon/Icon.jsx";
import styles from "./LabelRadioIcon.module.css";

function LabelRadioIcon({
  htmlForProp,
  iconName,
  iconTheme,
  iconStyle,
  isChecked,
  children,
}) {
  const className = `${styles[iconTheme]} ${styles.labelRadioIcon} ${
    isChecked ? styles.selectedLabel : ""
  }`;

  return (
    <label className={className} htmlFor={htmlForProp}>
      <div className={styles.iconContainer}>
        <Icon type={iconStyle} theme={iconTheme} name={iconName} />
      </div>
      <span>{children}</span>
    </label>
  );
}

export default LabelRadioIcon;
