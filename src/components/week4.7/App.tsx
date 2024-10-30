import React from 'react';
import { ThemeProvider } from './ThemeContex';
import ThemeToggleButton from './ThemeToggleButton';
import './styles.css';

export const AppSwitcher: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Hello, Dark Mode!</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};


