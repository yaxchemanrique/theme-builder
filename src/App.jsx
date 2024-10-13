import { useEffect, useState } from "react";
import { createThemeArr } from "./components/colorUtils.js";

import SettingsForm from "./components/SettingsForm/SettingsForm.jsx";
import ColorCardsContainer from "./components/ColorCardsContainer/ColorCardsContainer.jsx";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar.jsx";

import "./styles.css"

function App() {
  const [accentColor, setAccentColor] = useState("#6f4fbb");

  const initialSettings = {
    accentColor: accentColor,
    theme: "light",
    iconStyle: "outline",
    borderRadius: 1,
  };

  const [settings, setSettings] = useState(initialSettings);
  const themeColors = createThemeArr(settings.accentColor);

  useEffect(() => {
    for (let i = 0; i < themeColors.length; i++) {
      document.documentElement.style.setProperty(`--clr-accent-${themeColors[i].number}`, themeColors[i].code);
    }
    document.documentElement.style.setProperty(`--clr-accent-50-10`, (themeColors[1].code).slice(0, -1) + ' / .1)');
    document.documentElement.style.setProperty(`--clr-accent-50-40`, (themeColors[1].code).slice(0, -1) + ' / .4)');
    document.documentElement.style.setProperty(`--clr-accent-50-70`, (themeColors[1].code).slice(0, -1) + ' / .7)');

    document.documentElement.style.setProperty(`--clr-accent-950-30`, (themeColors[11].code).slice(0, -1) + ' / .3)');
    document.documentElement.style.setProperty(`--clr-accent-950-40`, (themeColors[11].code).slice(0, -1) + ' / .4)');
    document.documentElement.style.setProperty(`--clr-accent-950-70`, (themeColors[11].code).slice(0, -1) + ' / .7)');

  }, [accentColor]);

  return (
    <main className={settings.theme} >
      <SettingsForm
        setSettings={setSettings}
        settings={settings}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
      <ColorCardsContainer themeColors={themeColors} />
      <DashboardSidebar settings={settings} />
    </main>
  );
}

export default App;
