import React from "react";
import useTheme from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  if (!theme) {
    return null; // Return null if theme hasn't been set yet
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition duration-500  ${
        theme === "light" ? "bg-gray-200" : "bg-orange-400"
      }`}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitcher;
