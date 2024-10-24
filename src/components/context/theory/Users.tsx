import { UsersList } from "./UsersList";
import { useUsers } from "./useUsers"

export const Users = () => {

    const {getUsers} = useUsers()

    const users = getUsers();


    return <UsersList users={users} />
}