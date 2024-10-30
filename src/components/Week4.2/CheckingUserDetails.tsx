// CheckingLogin.tsx
import { FakeLoginComponent } from "../Week4.1/FakeLoginComponent";
import { UserProvider } from "../Week4.1/UserContext";
import { UserDetails } from "./UserDetails";

export const CheckingUserDetails = () => {

    return (
        <UserProvider>
            <UserDetails />
        </UserProvider>
    );
}
