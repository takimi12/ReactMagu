import { useUserContext } from "../Week4.1/UserContext"

export const InvoicesContext = () => {
    const {logOut}  = useUserContext()

    return (
        <div>
            Tutaj zobaczysz invoices, jeśli uzytkownik jest zalogowany

            <button onClick={logOut}>Wyloguj się</button>

        </div>
    )
}