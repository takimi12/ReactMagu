import React, { createContext } from 'react';

interface ThemeContextType {
  theme: 'white' | 'black';
  toggleTheme: () => void;
  
}

export const ThemeContext = createContext<ThemeContextType | null>(null);


