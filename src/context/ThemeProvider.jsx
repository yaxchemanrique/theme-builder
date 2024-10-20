import { createContext, useState, useEffect } from "react";
import { createThemeArr } from "../components/colorUtils";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [accentColor, setAccentColor] = useState("#6f4fbb");
  const [theme, setTheme] = useState("light");
  const [iconStyle, setIconStyle] = useState("outline");
  const [borderRadius, setBorderRadius] = useState(100);

  const themeColors = createThemeArr(accentColor);

  useEffect(() => {
    for (let i = 0; i < themeColors.length; i++) {
      document.documentElement.style.setProperty(
        `--clr-accent-${themeColors[i].number}`,
        themeColors[i].code
      );
    }
    document.documentElement.style.setProperty(
      `--clr-accent-50-10`,
      themeColors[1].code.slice(0, -1) + " / .1)"
    );
    document.documentElement.style.setProperty(
      `--clr-accent-50-40`,
      themeColors[1].code.slice(0, -1) + " / .4)"
    );
    document.documentElement.style.setProperty(
      `--clr-accent-50-70`,
      themeColors[1].code.slice(0, -1) + " / .7)"
    );

    document.documentElement.style.setProperty(
      `--clr-accent-950-30`,
      themeColors[11].code.slice(0, -1) + " / .3)"
    );
    document.documentElement.style.setProperty(
      `--clr-accent-950-40`,
      themeColors[11].code.slice(0, -1) + " / .4)"
    );
    document.documentElement.style.setProperty(
      `--clr-accent-950-70`,
      themeColors[11].code.slice(0, -1) + " / .7)"
    );
    document.documentElement.style.setProperty(
      `--clr-shadow-light`,
      themeColors[4].code.slice(4, -1)
    );
    document.documentElement.style.setProperty(
      `--clr-shadow-dark`,
      themeColors[9].code.slice(4, -1)
    );
  }, [accentColor]);

  function borderRadiusHandler(e) {
    const brValue = e.currentTarget.value / 100;
    setBorderRadius(e.currentTarget.value);
    document.documentElement.style.setProperty("--br", `${brValue}rem`);
  }

  const value = {
    themeColors,
    accentColor,
    setAccentColor,
    theme,
    setTheme,
    iconStyle,
    setIconStyle,
    borderRadius,
    borderRadiusHandler,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
