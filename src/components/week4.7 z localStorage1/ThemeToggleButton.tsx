import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContex';

export const ThemeToggleButton: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};


