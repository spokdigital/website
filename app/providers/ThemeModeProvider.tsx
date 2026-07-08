"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeModeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined,
);

function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);


  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (!saved) {
      localStorage.setItem("theme", theme);
    }
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
}
