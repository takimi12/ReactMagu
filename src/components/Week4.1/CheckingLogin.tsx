// CheckingLogin.tsx
import { FakeLoginComponent } from "./FakeLoginComponent";
import { UserProvider } from "./UserContext";

export const CheckingLogin = () => {
    return (
        <UserProvider>
            <FakeLoginComponent />
        </UserProvider>
    );
}
