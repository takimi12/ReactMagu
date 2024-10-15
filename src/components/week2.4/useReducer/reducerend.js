import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1 };
    case 'decrement':
      return {...state, count: state.count - 1 };
      case 'newUserInput':
        return {...state, userInput: action.payload};
    case 'tgColor':
        return{ ...state, color:!state.color}
    default:
      throw new Error();
  }
};

const ACTION = {
    ICREMENT: 'incremenet',
    DECREMENT: 'decrement',
    NEW_USER_INPUT: 'newUserInput',
    TG_COLOR: 'tgcolor'
}


function CounterApp() { 
  const [state, dispatch] = useReducer(reducer, { count: 0,userInput:'', color:false });


  return (
    <main className="App" style={{ color: state.color ? '#FFF' : '#FF952B' }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({type: ACTION.NEW_USER_INPUT, payload: e.target.value})}
      />
      <br /> <br />

      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.ICREMENT })}>+</button>
        <button onClick={() => dispatch({type: ACTION.TG_COLOR})}>Toggle Color</button>
      </section>
      <br /> <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default CounterApp;
