import React, { createContext, useContext, useState, ReactNode } from 'react';

// Typy dla powiadomień
type NotificationType = 'success' | 'error';

interface Notifications {
    message: string;
    type: NotificationType;
}

// Typ kontekstu powiadomień
interface NotificationContextType {
    showNotification: (message: string, type?: NotificationType) => void;
    notification: Notifications | null;
}

// Inicjalizacja kontekstu
export const NotificationContext = createContext<NotificationContextType | null>(null);

// Hook do korzystania z kontekstu
export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
