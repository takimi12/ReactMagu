// src/components/MoneyManager.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './moneySlice';
import { RootState } from './store';


const MoneyManager: React.FC = () => {
  const dispatch = useDispatch();
  const money = useSelector((state: RootState) => state.money.value);
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>('');


  const handleDeposit = () => {
    if (amount > 0) {
      dispatch(deposit(amount));
      setError('');
      setAmount(0);
    } else {
      setError('Kwota musi być większa od 0.');
    }
  };

  const handleWithdraw = () => {
    if (amount > 0 && amount <= money) {
      dispatch(withdraw(amount));
      setError('');
      setAmount(0);
    } else if (amount > money) {
      setError('Niewystarczające środki.');
    } else {
      setError('Kwota musi być większa od 0.');
    }
  };


  return (
    <div>
      <h2>Zarządzanie pieniędzmi</h2>
      <p>Aktualne saldo: {money} zł</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Kwota"
      />
      <button onClick={handleDeposit}>Wpłata</button>
      <button onClick={handleWithdraw}>Wypłata</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default MoneyManager;
