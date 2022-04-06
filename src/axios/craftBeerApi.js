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
  }
};
