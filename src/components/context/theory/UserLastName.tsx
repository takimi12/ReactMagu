import { useUserContext } from "./context/useUserContext"


export const UserLastName = () => {

const {user} = useUserContext();

if(!user) return null

const {lastName} = user

    return <p><strong>Last name</strong>{lastName}</p>
}