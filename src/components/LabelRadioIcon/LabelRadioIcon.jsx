import Icon from "../Icon/Icon.jsx"
import styles from "./LabelRadioIcon.module.css"

function LabelRadioIcon({htmlForProp, children}) {
  return (
    <label className={styles.labelRadioIcon} htmlFor={htmlForProp}>
    <div className={styles.iconContainer}>
      <Icon type='outline' theme='light' name='sun'/>
    </div>
    <span>{children}</span>
    </label>
  )
}

export default LabelRadioIcon