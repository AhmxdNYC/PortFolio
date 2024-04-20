import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme === "dark") {
      // Dark Scroll Theme
      document.documentElement.style.setProperty(
        "--scrollbar-track-color",
        "#2c2c2c",
      );
      document.documentElement.style.setProperty(
        "--scrollbar-thumb-color",
        "#939393",
      );
      document.documentElement.style.setProperty(
        "--scrollbar-thumb-hover-color",
        "#555",
      );
    } else {
      // light Scroll Theme
      document.documentElement.style.setProperty(
        "--scrollbar-track-color",
        "var(--scrollbar-track-color-light)",
      );
      document.documentElement.style.setProperty(
        "--scrollbar-thumb-color",
        "var(--scrollbar-thumb-color-light)",
      );
      document.documentElement.style.setProperty(
        "--scrollbar-thumb-hover-color",
        "var(--scrollbar-thumb-hover-color-light)",
      );
    }
  }, [theme]);
  ///

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
//////
