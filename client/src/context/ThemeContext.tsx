/**
 * ThemeContext.tsx - Theme provider corregido para toggle funcional
 * Persiste tema en localStorage y respeta preferencias del sistema
 */

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
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
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Inicializar tema desde localStorage o sistema
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      return stored as Theme;
    }
    
    // Si no hay preferencia guardada, usar preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Aplicar tema al DOM
  useEffect(() => {
    const root = document.documentElement;
    
    // Limpiar clases existentes
    root.classList.remove("dark", "light");
    
    // Aplicar nueva clase
    root.classList.add(theme);
    
    // Guardar en localStorage
    localStorage.setItem("theme", theme);
    
    // Aplicar color-scheme para elementos nativos del navegador
    root.style.colorScheme = theme;
    
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};