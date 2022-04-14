import { configureStore } from '@reduxjs/toolkit';
import productsSlice, { productSlice } from './features/productsSlice';
import userSlice from './features/userSlice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    products: productsSlice
  }
});
