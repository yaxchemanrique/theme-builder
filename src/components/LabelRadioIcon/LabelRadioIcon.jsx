import Icon from "../Icon/Icon.jsx"
import styles from "./LabelRadioIcon.module.css"

function LabelRadioIcon({htmlForProp, settings, iconName, isChecked, children}) {
  return (
    <label className={`${styles.labelRadioIcon} ${isChecked ? styles.selectedLabel : undefined}`} htmlFor={htmlForProp}>
    <div className={styles.iconContainer}>
      <Icon type={settings.iconStyle} theme={settings.theme} name={iconName}/>
    </div>
    <span>{children}</span>
    </label>
  )
}

export default LabelRadioIcon