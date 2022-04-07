import axiosClient from './axiosClient';

export const craftBeerApi = {
  signIn: (user) => {
    return axiosClient.post('/users/signin', user);
  },

  getProducts: () => {
    return axiosClient.get('/products');
  },

  createProduct: (product) => {
    return axiosClient.post('/products', product);
  },

  updateProduct: (product, id) => {
    return axiosClient.post(`/products/update/${id}`, product);
  },

  deleteProduct: (product, id) => {
    return axiosClient.delete(`/products/${id}`, { data: product });
  },

  getOrders: () => {
    return axiosClient.get('/orders');
  },

  signUp: (user) => {
    return axiosClient.post('/users/signup', user);
  },

  addToCart: (id) => {
    return axiosClient.post(`/products/cart/add/${id}`);
  },

  getCart: () => {
    return axiosClient.get('/carts');
  },

  increasingCartItem: (id) => {
    return axiosClient.post(`/cart-item/increasing/${id}`);
  },

  decreasingCartItem: (id) => {
    return axiosClient.post(`/cart-item/decreasing/${id}`);
  },

  deleteCartItem: (id) => {
    return axiosClient.delete(`/cart-item/delete/${id}`);
  },

  createOrder: () => {
    return axiosClient.post('/orders/create');
  }
};
