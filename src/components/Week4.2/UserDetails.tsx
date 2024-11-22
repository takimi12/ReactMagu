import { useUserContext } from "../week4.1/UserContext";

export const UserDetailsInfo = () => {
    const { isLoggedIn, users, logOut } = useUserContext();



    return (
        <>
            {isLoggedIn ? (
                <div>
{users.map(el => 

    <div>
    <p>Imię :{el.firstName}</p>
    <p>Nazwisko :{el.lastName}</p>
     </div>
    )}
         <button onClick={logOut}>Wyloguj</button>
                </div>
            ) : (
                <div>TRESC DLA NIEZALOGOWANEGO USERA</div>  
            )}
        </>
    );
};
