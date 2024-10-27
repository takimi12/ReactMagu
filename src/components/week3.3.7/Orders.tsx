import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetOrdersQuery } from './useGetOrders';




export const Orders = () => {
  const { data } = useGetOrdersQuery();



    // Sprawdzanie, czy dane są dostępne
    if (!data) return <p>No data available</p>;
    
  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {data.map(order => (
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
