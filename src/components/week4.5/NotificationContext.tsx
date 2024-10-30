import React, { createContext, useContext, useState, ReactNode } from 'react';

// Typy dla powiadomień
type NotificationType = 'success' | 'error';

interface Notification {
    message: string;
    type: NotificationType;
}

// Typ kontekstu powiadomień
interface NotificationContextType {
    showNotification: (message: string, type?: NotificationType) => void;
}

// Inicjalizacja kontekstu
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Hook do korzystania z kontekstu
export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

// Komponent wyświetlający powiadomienie
const Notification: React.FC<Notification> = ({ message, type }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 20,
            right: 20,
            padding: '10px 20px',
            color: 'white',
            borderRadius: '5px',
            backgroundColor: type === 'success' ? 'green' : 'red',
            zIndex: 1000,
        }}>
            {message}
        </div>
    );
};

// Typ dla komponentu NotificationProvider
interface NotificationProviderProps {
    children: ReactNode;
}

// Dostawca kontekstu powiadomień
export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [notification, setNotification] = useState<Notification | null>(null);

    // Funkcja wywoływana do wyświetlenia powiadomienia
    const showNotification = (message: string, type: NotificationType = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000); // Automatyczne ukrycie po 3 sekundach
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && <Notification message={notification.message} type={notification.type} />}
        </NotificationContext.Provider>
    );
};
