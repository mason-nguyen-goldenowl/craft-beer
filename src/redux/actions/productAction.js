import { craftBeerApi } from '../../axios/craftBeerApi';
import { getCart, getProducts } from '../features/productsSlice';

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
export const getCartAction = () => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.getCart();
      dispatch(getCart({ cartItems: result }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
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
      getProduct();
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
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (id) => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.addToCart(id);
      getCartAction();
      const cartIdLocal = await localStorage.getItem('cartId');
      if (!cartIdLocal || cartIdLocal !== result.id) {
        await localStorage.setItem('cartId', result.id);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const increasingCartItem = (id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.increasingCartItem(id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const decreasingCartItem = (id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.decreasingCartItem(id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.deleteCartItem(id);
    } catch (error) {
      console.log(err);
    }
  };
};

export const createOrder = () => {
  return async (dispatch) => {
    try {
      await craftBeerApi.createOrder();
    } catch (error) {
      console.log(error);
    }
  };
};
