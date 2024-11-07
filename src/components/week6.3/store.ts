// // src/redux/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import orderReducer from './slice'; // Import nowego reducer'a

// const store = configureStore({
//   reducer: {
//     order: orderReducer, // Dodanie orderReducer do store
//   },
// });

// // Typy dla stanu głównego i dispatch, aby ułatwić typowanie w komponentach
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

//////////////////////////

// src/redux/store.ts
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage'; // Domyślny storage (localStorage dla przeglądarki)
// import { persistReducer, persistStore } from 'redux-persist';
// import orderReducer from './slice'; // Importuj reducer zamówień

// // Konfiguracja redux-persist
// const persistConfig = {
//   key: 'root',      // Klucz, pod którym stan będzie zapisany w localStorage
//   storage,          // Medium przechowywania - tutaj localStorage
// };

// // Połącz wszystkie reducery, które chcesz persistować
// const rootReducer = combineReducers({
//   order: orderReducer, // Reducer dla zamówień
// });

// // Stwórz persisted reducer na podstawie konfiguracji
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Utwórz store z persisted reducer
// const store = configureStore({
//   reducer: persistedReducer,
// });

// // Eksportuj typy stanu głównego i dispatch dla lepszego typowania
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Eksportuj persistor, aby użyć go w App.tsx
// export const persistor = persistStore(store);
// export default store;
////////////////////////////////////////////////////////


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Domyślny storage (localStorage dla przeglądarki)
import { persistReducer, persistStore } from 'redux-persist';
import orderReducer from './slice'; // Importuj reducer zamówień

// Konfiguracja redux-persist
const persistConfig = {
  key: 'root',      // Klucz, pod którym stan będzie zapisany w localStorage
  storage,          // Medium przechowywania - tutaj localStorage
};

// Połącz wszystkie reducery, które chcesz persistować
const rootReducer = combineReducers({
  order: orderReducer, // Reducer dla zamówień
});

// Stwórz persisted reducer na podstawie konfiguracji
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Utwórz store z persisted reducer i ustaw opcje serializacji
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorowanie akcji redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Eksportuj typy stanu głównego i dispatch dla lepszego typowania
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Eksportuj persistor, aby użyć go w App.tsx
export const persistor = persistStore(store);
export default store;

