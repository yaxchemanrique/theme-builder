import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeProvider.jsx";

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
    <form>
      <input
        type="color"
        name="colorPicker"
        id="colorPicker"
        value={accentColor}
        onChange={(e) => {
          setAccentColor(e.target.value);
        }}
      />
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
      <fieldset className={styles.fieldset}>
        <label htmlFor="border-radius">
          border-radius: {borderRadius / 100}rem
        </label>
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
      </fieldset>
    </form>
  );
}

export default SettingsForm;
