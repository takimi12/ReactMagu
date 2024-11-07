import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, togglePaymentStatus, removeOrder } from './slice';
import { RootState } from './store';

export const OrdersPageWeek6: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOrders = useSelector((state: RootState) => state.order.selectedOrders);

  const availableOrders = [
    { id: 1, title: 'Zamówienie A' },
    { id: 2, title: 'Zamówienie B' },
    { id: 3, title: 'Zamówienie C' },
  ];

  const handleAddOrder = (order: { id: number; title: string }) => {
    dispatch(addOrder({ ...order, paid: false, quantity: 1 }));
  };

  const handleTogglePaymentStatus = (id: number) => {
    dispatch(togglePaymentStatus(id));
  };

  const handleRemoveOrder = (id: number) => {
    dispatch(removeOrder(id));
  };

  return (
    <div>
      <h1>Lista Zamówień</h1>
      <div>
        {availableOrders.map(order => (
          <div key={order.id} style={{display: 'flex'}}>
            <p>{order.title}</p>
            <button onClick={() => handleAddOrder(order)}>
              Dodaj do koszyka
            </button>
          </div>
        ))}
      </div>

      <h2>Twój Koszyk:</h2>
      <ul>
        {selectedOrders.map(order => (
          <li key={order.id}>
            {order.title} - Ilość: {order.quantity}
            <label>
              <input
                type="checkbox"
                checked={order.paid}
                onChange={() => handleTogglePaymentStatus(order.id)}
              />
              {order.paid ? 'Opłacono' : 'Do zapłaty'}
            </label>
            <button onClick={() => handleRemoveOrder(order.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
