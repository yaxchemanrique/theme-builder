import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeProvider.jsx";
import { HexColorPicker } from "react-colorful";

import InputGroupRadio from "../InputGroupRadio/InputGroupRadio.jsx";

import styles from "./SettingsForm.module.css";

function SettingsForm() {
  const {
    accentColor,
    setAccentColor,
    theme,
    setTheme,
    iconStyle,
    setIconStyle,
    borderRadius,
    borderRadiusHandler,
  } = useContext(ThemeContext);

  return (
    <form className={`${styles[theme]} ${styles.settingsForm}`}>
      <div className={styles.colorPickerContainer}>
        <p>escoge un color</p>
        <HexColorPicker
          style={{ width: "100%", height: "85%" }}
          color={accentColor}
          onChange={setAccentColor}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <fieldset className={styles.hexCodeGroup}>
          <label htmlFor="hexcodeInput">o agrega un hex code</label>
          <input
            type="text"
            id="hexcodeInput"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>tema</legend>
          <div className={styles.radioGroup}>
            <InputGroupRadio
              stateVar={theme}
              iconName="sun"
              iconTheme={theme}
              iconStyle={iconStyle}
              nameProp="theme"
              valueProp="light"
              onChangeFunction={(e) => {
                setTheme(e.target.value);
              }}
            >
              claro
            </InputGroupRadio>
            <InputGroupRadio
              stateVar={theme}
              iconName="moon"
              iconTheme={theme}
              iconStyle={iconStyle}
              nameProp="theme"
              valueProp="dark"
              onChangeFunction={(e) => {
                setTheme(e.target.value);
              }}
            >
              oscuro
            </InputGroupRadio>
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>estilo de íconos</legend>
          <div className={styles.radioGroup}>
            <InputGroupRadio
              stateVar={iconStyle}
              iconName="power"
              iconTheme={theme}
              iconStyle="outline"
              nameProp="iconStyle"
              valueProp="outline"
              onChangeFunction={(e) => {
                setIconStyle(e.target.value);
              }}
            >
              contorno
            </InputGroupRadio>
            <InputGroupRadio
              stateVar={iconStyle}
              iconName="power"
              iconTheme={theme}
              iconStyle="solid"
              nameProp="iconStyle"
              valueProp="solid"
              onChangeFunction={(e) => {
                setIconStyle(e.target.value);
              }}
            >
              sólido
            </InputGroupRadio>
          </div>
        </fieldset>
        <fieldset className={styles.rangeInputGroup}>
          <label htmlFor="border-radius">
            border-radius: {borderRadius / 100}rem
          </label>
          <div className={styles.rangeInputContainer}>
            <input
              type="range"
              id="border-radius"
              min={0}
              max={200}
              value={borderRadius}
              onChange={borderRadiusHandler}
            />
            <div className={styles.rangeValues}>
              <p>0rem</p>
              <p>2rem</p>
            </div>
          </div>
        </fieldset>
      </div>
    </form>
  );
}

export default SettingsForm;
