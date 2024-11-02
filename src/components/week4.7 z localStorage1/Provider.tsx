import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContex";
import {ThemeToggleButton} from "./ThemeToggleButton"
import './styles.css';


export const AppSwitcher = () => {

  

    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? (savedTheme as 'light' | 'dark') : 'light'; // Domyślny motyw to 'light'
    });


    // // Ustawienie atrybutu `data-theme` przy zmianie motywu
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme); // Zapisanie motywu w Local Storage
    }, [theme]);
  
    // // Funkcja przełączająca motyw
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <>
      <ThemeContext.Provider value={{ theme,toggleTheme  }}>
        <ThemeToggleButton />
      </ThemeContext.Provider>
      </>
      );
  };