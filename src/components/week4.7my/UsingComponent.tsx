import { useContext } from "react"
import { ThemeContext } from "./Context";

export const ChooseMode = () => {
 


  const context = useContext(ThemeContext);

  if (!context) {
    return null; 
  }

  const { theme, toggleTheme } = context;



    return (

<button onClick={toggleTheme}> Zmień kolor</button>

    )
}