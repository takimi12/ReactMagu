import { NotificationContext } from './NotificationContext';
import { AddClientComponent } from './AddCustomer';
import { AddOrderComponent } from './AddCustomer';
import { ReactNode, useState } from 'react';
import { Notification } from './NotificationPopUp';



type NotificationType = 'success' | 'error';


interface Notification {
    message: string;
    type: NotificationType;
}


export const ContextWeek45 = () => {
        const [notification, setNotification] = useState<Notification | null>(null);

     
        const showNotification = (message: string, type: NotificationType = 'success') => {
            setNotification({ message, type });
            setTimeout(() => setNotification(null), 3000);
        };
    
        return (
            <NotificationContext.Provider value={{ showNotification, notification}}>
                <AddClientComponent />
                <AddOrderComponent />
                {notification && <Notification  />}
            </NotificationContext.Provider>
        );
    };
    

