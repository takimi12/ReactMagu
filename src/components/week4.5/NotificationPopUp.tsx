import { useNotification } from "./NotificationContext";

type NotificationType = 'success' | 'error';

interface Notification {
    message: string;
    type: NotificationType;
}


export const Notification = () => {
    const { notification } = useNotification();

    if(!notification) return <p>potrzebne dane</p>

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            right: '50%',
            padding: '10px 20px',
            color: 'white',
            borderRadius: '5px',
            backgroundColor: notification.type === 'success' ? 'green' : 'red',
            zIndex: 1000,
        }}>
            {notification.message}
        </div>
    );
};
