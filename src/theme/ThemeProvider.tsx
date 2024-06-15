'use client';
import React, { useState, useEffect, createContext, ReactNode, FC } from "react";

const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
  }
  return "dark";
};

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const themeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  initialTheme?: string;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<string>(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};