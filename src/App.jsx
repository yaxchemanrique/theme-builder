import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "./context/ThemeProvider.jsx";

import SettingsForm from "./components/SettingsForm/SettingsForm.jsx";
import ColorCardsContainer from "./components/ColorCardsContainer/ColorCardsContainer.jsx";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar.jsx";

import "./styles.css"

function App() {
  const { settings, themeColors } = useContext(ThemeContext);

  return (
    <main className={settings.theme} >
      <SettingsForm />
      <ColorCardsContainer themeColors={themeColors} />
      <DashboardSidebar settings={settings} />
    </main>
  );
}

export default App;
