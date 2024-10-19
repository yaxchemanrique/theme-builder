import { useContext } from "react";

import { ThemeContext } from "./context/ThemeProvider.jsx";

import SettingsForm from "./components/SettingsForm/SettingsForm.jsx";
import ColorCardsContainer from "./components/ColorCardsContainer/ColorCardsContainer.jsx";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar.jsx";
import UserSelection from "./components/UserSelection/UserSelection.jsx";
import SignInForm from "./components/SignInForm/SignInForm.jsx";
import Pricing from './components/Pricing/Pricing.jsx'

import "./styles.css"
import Calendar from "./components/Calendar/Calendar.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme} >
      <SettingsForm />
      <ColorCardsContainer />
      <Calendar />
      <Pricing />
      <SignInForm />
      <UserSelection />
      <DashboardSidebar />
    </main>
  );
}

export default App;
