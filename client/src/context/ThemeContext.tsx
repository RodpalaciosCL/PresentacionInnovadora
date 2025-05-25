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
  defaultTheme = "dark",
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [actualTheme, setActualTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme;
      if (stored === "light") return "light";
      if (stored === "dark") return "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    const getSystemTheme = (): "dark" | "light" => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    // Fix 3: Toggle de tema simplificado y forzado
    const applyTheme = (currentTheme: Theme) => {
      let resolvedTheme: "dark" | "light";
      
      if (currentTheme === "system") {
        resolvedTheme = getSystemTheme();
      } else {
        resolvedTheme = currentTheme;
      }
      
      // Forzar eliminación y aplicación de clases
      root.classList.remove("light", "dark");
      
      // Pequeño delay para asegurar que se aplique
      requestAnimationFrame(() => {
        if (resolvedTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.add("light");
        }
        
        // Forzar repaint
        root.style.colorScheme = resolvedTheme;
      });
      
      setActualTheme(resolvedTheme);
      localStorage.setItem("theme", currentTheme);
      
      // Debug: verificar que se aplicó
      console.log(`Aplicando tema: ${resolvedTheme}, clases HTML:`, root.classList.toString());
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