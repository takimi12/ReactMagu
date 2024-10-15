import React, { useReducer } from 'react';


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function CounterClaude() {
  const [state, reducer] = useReducer(  reducer,{count: 0}, );
  
  return (
    <>
      Licznik: {state.count}
      <button onClick={() => reducer({ type: 'increment' })}>+</button>
      <button onClick={() => reducer({ type: 'decrement' })}>-</button>
    </>
  );
}