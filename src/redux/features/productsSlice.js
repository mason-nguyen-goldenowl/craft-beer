import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cartItems: [],
    orders: [],
    productsCategory: [],
    totalPage: 1,
    selectedTag: [],
    arrFilter: [],
    totalQuantity: 0
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
      state.totalPage = action.payload.totalPage;
    },
    getProductsCategory(state, action) {
      state.productsCategory = action.payload.products;
    },

    getCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalQuantity = action.payload.totalQuantity;
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
    },
    addSelectTag(state, action) {
      const tagexist = state.selectedTag.find((tag) => tag === action.payload.cate);
      if (!tagexist) {
        state.selectedTag.push(action.payload.cate);
      }
    },
    deleteTag(state, action) {
      state.selectedTag = state.selectedTag.filter((tag) => tag !== action.payload.tag);
    },
    resetFilter(state) {
      state.selectedTag = [];
      state.arrFilter = [];
    },
    filterProduct(state, action) {
      state.arrFilter = action.payload.products;
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
  getOrders,
  getProductsCategory,
  addSelectTag,
  resetFilter,
  filterProduct,
  deleteTag
} = productSlice.actions;
export default productSlice.reducer;
