import { useContext } from "react"
import { ConfigContext } from "./ConfigContext"

export const useConfigContext = () => {
    const context = useContext(ConfigContext);


    if(!context) throw new Error('uzyj kontekstu')

    return context
}