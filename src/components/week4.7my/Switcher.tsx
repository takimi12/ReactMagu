import { useState } from "react"
import { ThemeContext } from "./Context"
import { ChooseMode } from "./ChoseMode";

export const SwitcherMy = () => {


const [theme, setTheme] = useState<'white' | 'black'>('white');


const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'white' ? 'black' : 'white'));
};
    return (
        <>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
           <div style={{backgroundColor:`${theme}`}}> 
        <ChooseMode />
        swithcer bez local storage
        </div>
        </ThemeContext.Provider>
        </>
        )
}