import { useUserContext } from "../Week4.1/UserContext";

export const UserDetails = () => {
    const { isLoggedIn, users } = useUserContext();



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
                </div>
            ) : (
                <div>TRESC DLA NIEZALOGOWANEGO USERA</div>  
            )}
        </>
    );
};
