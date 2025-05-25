/**
 * ThemeContext.tsx - Theme provider with dark/light mode
 * Persists theme in localStorage and provides toggle functionality
 */

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [actualTheme, setActualTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    
    const getSystemTheme = (): "dark" | "light" => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    // Fix 3: Simplificar aplicación de tema
    const applyTheme = (currentTheme: Theme) => {
      // Limpiar clases existentes
      root.classList.remove("light", "dark");
      
      let resolvedTheme: "dark" | "light";
      
      if (currentTheme === "system") {
        resolvedTheme = getSystemTheme();
      } else {
        resolvedTheme = currentTheme;
      }
      
      // Aplicar la nueva clase
      if (resolvedTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }
      
      setActualTheme(resolvedTheme);
      localStorage.setItem("theme", currentTheme);
    };

    applyTheme(theme);

    // Listen for system theme changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme(theme);
      mediaQuery.addEventListener("change", handleChange);
      
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};