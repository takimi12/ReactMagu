import { SingleUser } from "."
import { UserDetails } from "./UserDetails";
import { UserMainData } from "./UserMainData";

export type UserProps = {
    user: SingleUser;
}
export const User = () => {
return (
    <li>
                <UserMainData />
                <UserDetails  />
    </li>
)
}        