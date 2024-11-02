// CheckingLogin.tsx
import { useEffect, useState } from "react";
import { FakeLoginComponent } from "./FakeLoginComponent";
import { User } from "./type";
import { UserContext } from "./UserContext";


    export const UserProvider = () => {
        

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
            <FakeLoginComponent />
          </UserContext.Provider>
        );
      };
    