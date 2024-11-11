import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return userPrefersDark ? "dark" : "light";
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply the theme to the DOM on initial load
  useEffect(() => {
    const applyTheme = (currentTheme) => {
      if (currentTheme === "dark") {
        document.documentElement.classList.add("dark");
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
        document.documentElement.classList.remove("dark");
        document.documentElement.style.setProperty(
          "--scrollbar-track-color",
          "var(--scrollbar-track-color-light, #e0e0e0)",
        );
        document.documentElement.style.setProperty(
          "--scrollbar-thumb-color",
          "var(--scrollbar-thumb-color-light, #c0c0c0)",
        );
        document.documentElement.style.setProperty(
          "--scrollbar-thumb-hover-color",
          "var(--scrollbar-thumb-hover-color-light, #a0a0a0)",
        );
      }
    };

    // Apply theme based on `theme` state
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
