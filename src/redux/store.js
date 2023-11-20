// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlicer.js';

export const store = configureStore({
  reducer: {
    menu: productsReducer,
  },
});
