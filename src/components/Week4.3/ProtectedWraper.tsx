// ProtectedWrapper.tsx
import React from 'react';
import { useUserContext } from '../Week4.1/UserContext';
import { Navigate } from 'react-router-dom';

interface ProtectedWrapperProps {
  children: React.ReactNode;
}

export const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  if (!isLoggedIn) {
    // Przekierowanie na stronę logowania, jeśli użytkownik nie jest zalogowany
    return <Navigate to="/login" replace />;
  }

  // Wyświetlanie dzieci komponentu, jeśli użytkownik jest zalogowany
  return <>{children}</>;
};

