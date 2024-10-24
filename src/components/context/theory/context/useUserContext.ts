import { useContext } from "react"
import { UserContext } from "./UserContext"

export const useUserContext = () => {
    const context = useContext(UserContext)

    if(!context) throw new Error('You need to provide UserContext.Provider to useUserContext!')

    return context

}