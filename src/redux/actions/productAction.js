import { craftBeerApi } from '../../axios/craftBeerApi';
import { getProducts } from '../features/productsSlice';

export const getProduct = () => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.getProducts();

      dispatch(getProducts({ products: result }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      console.log('create');
      await craftBeerApi.createProduct(product);

      getProduct();
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (product, id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.updateProduct(product, id);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (product, id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.deleteProduct(product, id);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getOrders = () => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.getOrders();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};
