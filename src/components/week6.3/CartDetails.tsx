// src/pages/OrderDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';

interface OrderDetailsParams {
  id: string ; // ID zamówienia pobrane z URL
}

export const CartDetails = () => {
    const { id } = useParams<Record<string, string | undefined>>(); // Poprawiony typ dla useParams
    const orderId = id ? parseInt(id) : null; // Konwertujemy ID na liczbę, jeśli jest dostępne

  // Pobieramy zamówienie z Redux
  const order = useSelector((state: RootState) =>
    state.order.selectedOrders.find((order) => order.id === orderId)
  );

  if (!order) {
    return <p>Nie znaleziono zamówienia o tym ID.</p>;
  }

  return (
    <div>
      <h1>Szczegóły zamówienia</h1>
      <div>
        <p><strong>Tytuł:</strong> {order.title}</p>
        <p><strong>Identyfikator zamówienia:</strong> {order.id}</p>
        <p><strong>Status płatności:</strong> {order.paid ? 'Opłacono' : 'Nieopłacono'}</p>
        <p><strong>Ilość:</strong> {order.quantity}</p>
      </div>
    </div>
  );
};
