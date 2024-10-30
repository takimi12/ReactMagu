// CheckingLogin.tsx
import {ProtectedWrapper} from "./ProtectedWraper"
import { UserProvider } from "../Week4.1/UserContext";
import { InvoicesContext } from "./Invoices";

export const CheckProtectedInvoices = () => {
    return (
        <UserProvider>
            <ProtectedWrapper >
                <InvoicesContext />
                </ProtectedWrapper>
        </UserProvider>
    );
}
