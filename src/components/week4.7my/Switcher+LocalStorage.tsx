import { useState, useEffect } from "react";
import { ThemeContext } from "./Context";
import { ChooseMode } from "./UsingComponent";


export const SwitcherMyStorage = () => {
    
    const getInitialTheme = (): 'white' | 'black' => {
        return localStorage.getItem('theme') as 'white' | 'black' || 'white';
    };
    
    
    const [theme, setTheme] = useState<'white' | 'black'>(getInitialTheme);





    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'white' ? 'black' : 'white';
            localStorage.setItem('theme', newTheme, ); 
            return newTheme;
        });
    };


    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div style={{ backgroundColor: `${theme}` }}>
                    <ChooseMode />
                </div>
            </ThemeContext.Provider>
        </>
    );
};
