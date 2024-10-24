import { createContext } from "react";
import { UserContextType } from "../index";


export const UserContext = createContext<UserContextType>({
    user:null,

})