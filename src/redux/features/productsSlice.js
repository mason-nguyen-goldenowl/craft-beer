import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cartItems: []
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
    },

    getCart(state, action) {
      state.cartItems = action.payload.cartItems;
    }
  }
});

export const selectProducts = (state) => state.products;
export const { getProducts, getCart } = productSlice.actions;
export default productSlice.reducer;
