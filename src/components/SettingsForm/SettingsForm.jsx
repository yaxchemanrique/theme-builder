import { useState } from "react";

import LabelRadioIcon from "../LabelRadioIcon/LabelRadioIcon.jsx";
import InputGroupRadio from "../InputGroupRadio/InputGroupRadio.jsx";

import styles from "./SettingsForm.module.css";

function SettingsForm({ settings, setSettings }) {
  const [theme, setTheme] = useState("light");
  const [iconStyle, setIconStyle] = useState("outline");

  function borderRadiusHandler(e) {
    const brValue = e.currentTarget.value / 100;
    document.documentElement.style.setProperty("--br", `${brValue}rem`);
  }

  function settingsHandler(property, value) {
    const nextSettings = {
      ...settings,
    };
    nextSettings[property] = value;
    setSettings(nextSettings);
  }

  const setFunctionsNames = {
    theme: setTheme,
    iconStyle: setIconStyle,
  };

  function onChangeFunc(e, prop) {
    const value = e.target.value;

    if (setFunctionsNames[prop]) {
      setFunctionsNames[prop](value);
      settingsHandler(prop, e.target.value);
    } else {
      console.error(`No function found for property: ${prop}`);
    }
  }

  return (
    <form>
      <fieldset className={styles.fieldset}>
        <legend>tema</legend>
        <div className={styles.radioGroup}>
          <InputGroupRadio
            stateVar={theme}
            iconName="sun"
            settings={settings}
            nameProp="theme"
            valueProp="light"
            onChangeFunction={onChangeFunc}
          >
            claro
          </InputGroupRadio>
          <InputGroupRadio
            stateVar={theme}
            iconName="moon"
            settings={settings}
            nameProp="theme"
            valueProp="dark"
            onChangeFunction={onChangeFunc}
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
            settings={settings}
            nameProp="iconStyle"
            valueProp="outline"
            onChangeFunction={onChangeFunc}
          >
            contorno
          </InputGroupRadio>
          <InputGroupRadio
            stateVar={iconStyle}
            iconName="power"
            settings={settings}
            nameProp="iconStyle"
            valueProp="solid"
            onChangeFunction={onChangeFunc}
          >
            sólido
          </InputGroupRadio>
        </div>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor="border-radius">border-radius</label>
        <input
          type="range"
          id="border-radius"
          defaultValue={100}
          min={0}
          max={200}
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
