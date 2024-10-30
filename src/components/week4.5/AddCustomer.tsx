import React from 'react';
import { useNotification } from './NotificationContext';

export const AddClientComponent: React.FC = () => {
    const { showNotification } = useNotification();
// Przykładowa funkcja dodająca klienta, która zawsze kończy się sukcesem
const addClient = async (clientData: any): Promise<void> => {
    // Tutaj można umieścić logikę dodawania klienta, np. zapytanie do API.
    // Na potrzeby tego przykładu, zakładamy, że zawsze działa poprawnie.
};

    const handleAddClient = async () => {
        try {
            await addClient({ /* dane klienta */ });
            showNotification('Klient został dodany pomyślnie!', 'success');
        } catch (error) {
            showNotification('Błąd podczas dodawania klienta.', 'error');
        }
    };

    return (
        <button onClick={handleAddClient}>Dodaj klienta</button>
    );
};

export const AddOrderComponent: React.FC = () => {
    const { showNotification } = useNotification();


// Przykładowa funkcja dodająca zamówienie, która zawsze kończy się błędem
const addOrder = async (orderData: any): Promise<void> => {
    // Symulacja niepowodzenia dodania zamówienia, rzucając błąd.
    throw new Error('Nie udało się dodać zamówienia');
};

    const handleAddOrder = async () => {
        try {
            await addOrder({ /* dane zamówienia */ });
            showNotification('Zamówienie zostało dodane pomyślnie!', 'success');
        } catch (error) {
            showNotification('Błąd podczas dodawania zamówienia.', 'error');
        }
    };

    return (
        <button onClick={handleAddOrder}>Dodaj zamówienie</button>
    );
};
