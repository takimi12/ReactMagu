import { useContext } from "react";
import { SingleUser} from "./index"
import { UserContext } from "./context/UserContext";
import { useUserContext } from "./context/useUserContext";


export const UserDetails = () => {
    const {user} = useUserContext();

console.log(user, 'user details context')


    if(!user) return null;

    const {name, lastName, age} = user;    

    return(
        <p>
            <small>{name} {lastName} is {age}</small>
        </p>
    )
}