import { useState, useEffect } from "react";

const useTheme = (): [string | null, (newTheme: string) => void] => {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get stored theme or set default based on system preference
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        const systemPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";
        setTheme(systemPreference);
      }
    }
  }, []);

  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {

    if (theme) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
  
      // save theme to local storage
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
