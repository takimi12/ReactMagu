import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserContextType } from "./type";

// Tworzymy kontekst z typem opcjonalnym dla `UserContextType`
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Inicjalizujemy `isLoggedIn` z `localStorage` lub domyślnie `false`
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [users, setUsers] = useState<User[]>([]);

  // Funkcja do pobierania listy użytkowników z API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };



  // Pobranie użytkowników przy pierwszym renderze
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
      {children}
    </UserContext.Provider>
  );
};

// Hook do używania kontekstu
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
