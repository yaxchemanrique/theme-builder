import React, { useState } from "react";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar.jsx";
import SettingsForm from "./components/SettingsForm/SettingsForm.jsx";

function App() {
  const initialSettings = {
    accentColor: "#CBB9F9",
    theme: "light",
    iconStyle: "outline",
    borderRadius: 1,
  };
  const [settings, setSettings] = useState(initialSettings);

  return (
    <main style={{backgroundColor: `var(--theme-${settings.theme})`}}>
      <SettingsForm setSettings={setSettings} settings={settings} />
      <DashboardSidebar settings={settings}/>
    </main>
  );
}

export default App;
