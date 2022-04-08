import { createSlice } from '@reduxjs/toolkit';
import { increasingCartItem } from '../actions/productAction';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cartItems: [],
    orders: []
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
    },

    getCart(state, action) {
      state.cartItems = action.payload.cartItems;
    },

    increasingCartItemAction(state, action) {
      const itemIncrea = state.cartItems.find((item) => item.id === action.payload.id);
      itemIncrea.quantity++;
    },

    decreasingCartItemAction(state, action) {
      const itemDecrea = state.cartItems.find((item) => item.id === action.payload.id);
      itemDecrea.quantity--;
    },

    checkOut(state, action) {
      state.cartItems = [];
    },
    getOrders(state, action) {
      state.orders = action.payload.orders;
    }
  }
});

export const selectProducts = (state) => state.products;
export const {
  getProducts,
  getCart,
  increasingCartItemAction,
  checkOut,
  decreasingCartItemAction,
  getOrders
} = productSlice.actions;
export default productSlice.reducer;
