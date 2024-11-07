// src/pages/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from './store';

export const Cart = () => {
  // Pobieramy zamówienia z Redux
  const orders = useSelector((state: RootState) => state.order.selectedOrders);

  return (
    <div>
      <h1>Twój koszyk</h1>
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id}>
              {/* Link do szczegółów zamówienia */}
              <Link to={`/cart/${order.id}`}>{order.title}</Link>
            </li>
          ))
        ) : (
          <p>Twój koszyk jest pusty.</p>
        )}
      </ul>
    </div>
  );
};

