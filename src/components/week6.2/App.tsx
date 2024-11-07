// src/index.tsx

import { Provider } from 'react-redux';
import store from './store';
import MoneyManager from './MoneyManager';

export const MoneyManagerApp =() => {
return (
  <Provider store={store}>
    <MoneyManager/>
  </Provider>
)
}