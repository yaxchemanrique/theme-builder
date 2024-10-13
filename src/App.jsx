import { useContext } from "react";

import { ThemeContext } from "./context/ThemeProvider.jsx";

import SettingsForm from "./components/SettingsForm/SettingsForm.jsx";
import ColorCardsContainer from "./components/ColorCardsContainer/ColorCardsContainer.jsx";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar.jsx";

import "./styles.css"
import UserSelection from "./components/UserSelection/UserSelection.jsx";
import SignInForm from "./components/SignInForm/SignInForm.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme} >
      <SettingsForm />
      <ColorCardsContainer />
      <SignInForm />
      <UserSelection />
      <DashboardSidebar />
    </main>
  );
}

export default App;
