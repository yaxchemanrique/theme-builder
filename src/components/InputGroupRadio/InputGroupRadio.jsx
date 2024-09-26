import LabelRadioIcon from "../LabelRadioIcon/LabelRadioIcon";
import styles from "./InputGroupRadio.module.css"

function InputGroupRadio({
  stateVar,
  iconName,
  settings,
  nameProp,
  valueProp,
  onChangeFunction,
  children,
}) {
  const isChecked = stateVar === valueProp;
  return (
    <div className={styles.inputGroupRadio}>
      <input
        className={`${styles.radio}`}
        checked={isChecked}
        type="radio"
        name={nameProp}
        id={valueProp}
        value={valueProp}
        onChange={(e) => onChangeFunction(e, nameProp)}
      />
      <LabelRadioIcon
        htmlForProp={valueProp}
        iconName={iconName}
        settings={settings}
        isChecked={isChecked}
      >
        {children}
      </LabelRadioIcon>
      
    </div>
  );
}

export default InputGroupRadio;
