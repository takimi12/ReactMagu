import React, { createContext, useContext, useState, useEffect } from 'react';

 type User = {
  id: string;
  firstName:string;
  lastName:string;
  email:string;
  password: string;
}

 type UserContextType = {
  isLoggedIn: boolean;
  logIn: (username: string, password: string) => boolean;
  logOut: () => void;
  users: User[];
}
// Tworzymy kontekst z typem opcjonalnym dla `UserContextType`
export const UserContext = createContext<UserContextType | undefined>(undefined);



// Hook do używania kontekstu
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context ===  undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
