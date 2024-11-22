// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Avatar } from './Avatar';

export const ReduxWeek61 =() => {
return (
  <Provider store={store}>
<Avatar />
  </Provider>
)
}