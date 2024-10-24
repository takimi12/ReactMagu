import { useUserContext } from "./context/useUserContext"


export const UserFirstName = () => {
const {user} = useUserContext();


// console.log(user, 'use destruktur from user firstname')


if(!user) return null

const {name} = user
return <p><strong>First name</strong>{name}</p>
}