import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetOrderIdQuery } from './useGetOrdersId';



export const OrdersIdTanstack = () => {
  const { ids } = useParams<{ ids: string }>(); 

  const idTanstack = ids !== undefined ? ids : '1';
  const { data } = useGetOrderIdQuery(idTanstack);

  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Client ID:</strong> {data.clientId}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Quantity:</strong> {data.quantity}</p>

      <Link to="/orders">Back to Orders</Link>
    </div>
  );
};
