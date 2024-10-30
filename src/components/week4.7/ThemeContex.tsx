import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Definiowanie typów dla motywu i funkcji przełączania
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Inicjalizacja kontekstu z typem `ThemeContextType`
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Definiowanie typów dla komponentu `ThemeProvider` z `children`
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Ładowanie zapisanej preferencji użytkownika przy montowaniu komponentu
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Funkcja przełączająca motyw
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
