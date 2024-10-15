import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

type Order = {
  id: number;
  clientId: number;
  title: string;
  description: string;
  quantity: number;
};

export const OrdersId = () => {
  const { id } = useParams<{ id: string }>(); 
  const [order, setOrder] = useState<Order | null>(null); 

  useEffect(() => {
    // Pobieranie zamówienia po id za pomocą fetch
    fetch(`http://localhost:3000/orders/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching order');
        }
        return response.json();
      })
      .then((data: Order) => {
        setOrder(data); // Ustawiamy dane zamówienia
      })
      .catch(error => {
        console.error(error); // Obsługa błędów
      });
  }, [id]);

  if (!order) {
    return <p>Loading order data...</p>; // Wyświetlamy komunikat podczas ładowania danych
  }

  // Mapa danych zamówienia do JSX
  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Client ID:</strong> {order.clientId}</p>
      <p><strong>Title:</strong> {order.title}</p>
      <p><strong>Description:</strong> {order.description}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>

      {/* Link do powrotu do listy zamówień */}
      <Link to="/orders">Back to Orders</Link>
    </div>
  );
};
