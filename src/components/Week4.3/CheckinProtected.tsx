// CheckingLogin.tsx
import { useEffect, useState } from "react";
import { FakeLoginComponent } from "../week4.1/FakeLoginComponent";
import { User } from "../week4.1/type";
import { UserContext } from "../week4.1/UserContext";
import {ProtectedWrapper} from "./ProtectedWraper"
import { InvoicesContext } from "./Invoices";


    export const CheckingProtected= () => {
        

        const isLoggedInFromStorage = localStorage.getItem('isLoggedIn') === 'true';

        const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isLoggedInFromStorage);
        const [users, setUsers] = useState<User[]>([]);
      

        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:3000/users');
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
      

        useEffect(() => {
          fetchUsers();
        }, []);
      
        // Funkcja logowania
        const logIn = (email: string, password: string): boolean => {
          if (!users) {
            return false;
          }
          // Sprawdzamy, czy użytkownik istnieje
          const user = users.find(user => user.email === email && user.password === password);
      
          if (user) {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', 'true'); // Zapisujemy stan w `localStorage`
            return true;
          }
      
          return false;
        };
      
        // Funkcja wylogowania
        const logOut = () => {
          setIsLoggedIn(false);
          localStorage.removeItem('isLoggedIn'); // Usuwamy stan z `localStorage`
        };
      
        return (
          <UserContext.Provider value={{ isLoggedIn, logIn, logOut,users }}>
 <ProtectedWrapper>
    <InvoicesContext />
 </ProtectedWrapper>
          </UserContext.Provider>
        );
      };
    