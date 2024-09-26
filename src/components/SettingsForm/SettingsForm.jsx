import styles from "./SettingsForm.module.css";
import LabelRadioIcon from "../LabelRadioIcon/LabelRadioIcon.jsx";
import { useState } from "react";

function SettingsForm({ settings, setSettings }) {
  const [theme, setTheme] = useState();
  const [iconStyle, setIconStyle] = useState();

  function borderRadiusHandler(e) {
    const brValue = e.currentTarget.value / 100;
    document.documentElement.style.setProperty("--br", `${brValue}rem`);
  }

  function settingsHandler(property, value) {
    const nextSettings = {
      ...settings,
      // theme: value,
    };
    nextSettings[property] = value
    console.log(nextSettings)
    setSettings(nextSettings);
  }

  return (
    <form>
      <fieldset>
        <legend>tema</legend>
        <LabelRadioIcon>claro</LabelRadioIcon>
        <label htmlFor="light">claro</label>
        <input
          checked={theme === "light"}
          type="radio"
          name="theme"
          id="light"
          value="light"
          onChange={(e) => {
            setTheme(e.target.value);
            settingsHandler('theme', e.target.value);
          }}
        />
        <label htmlFor="dark">oscuro</label>
        <input
          checked={theme === "dark"}
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          onChange={(e) => {
            setTheme(e.target.value);
            settingsHandler('theme', e.target.value);
          }}
        />
      </fieldset>

      <fieldset>
        <legend>estilo de íconos</legend>
        <label htmlFor="outline">contorno</label>
        <input
          checked={iconStyle === "outline"}
          value="outline"
          type="radio"
          name="icon-style"
          id="outline"
          onChange={(e) => {
            setIconStyle(e.target.value)
            settingsHandler('icon', e.target.value)
          }}
        />
        <label htmlFor="solid">relleno</label>
        <input
          checked={iconStyle === "solid"}
          value="solid"
          type="radio"
          name="icon-style"
          id="solid"
          onChange={(e) => {
            setIconStyle(e.target.value)
            settingsHandler('icon', e.target.value)
          }}
        />
      </fieldset>
      <fieldset>
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
