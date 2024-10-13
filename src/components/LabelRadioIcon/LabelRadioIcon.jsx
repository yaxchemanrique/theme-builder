import Icon from "../Icon/Icon.jsx"
import styles from "./LabelRadioIcon.module.css"

function LabelRadioIcon({htmlForProp, settings, iconName, isChecked, children}) {

  const className = `${styles[settings.theme]} ${styles.labelRadioIcon} ${isChecked ? styles.selectedLabel : ''}`;

  return (
    <label className={className} htmlFor={htmlForProp}>
    <div className={styles.iconContainer}>
      <Icon type={settings.iconStyle} theme={settings.theme} name={iconName}/>
    </div>
    <span>{children}</span>
    </label>
  )
}

export default LabelRadioIcon