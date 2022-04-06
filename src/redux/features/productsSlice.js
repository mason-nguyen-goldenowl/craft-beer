import { createSlice } from '@reduxjs/toolkit';
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
    },
    updateProducts(state, action) {
      state.products = action.payload.products;
    }
  }
});

export const selectProducts = (state) => state.products;
export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
