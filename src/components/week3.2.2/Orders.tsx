import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


type Order ={
    id: number,
    clientId: number,
    title:string,
    description: string,
    quantity: number
}


export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Pobieranie zamówień z json-server za pomocą fetch
    fetch('http://localhost:3000/orders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching orders');
        }
        return response.json();
      })
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p>Title: {order.title}</p>
            <p>Quantity: {order.quantity}</p>
            {/* Przyciski szczegółów */}
            <Link to={`/orders/${order.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
