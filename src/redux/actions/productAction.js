import { craftBeerApi } from '../../axios/craftBeerApi';
import {
  checkOut,
  decreasingCartItemAction,
  getCart,
  getOrders,
  getProducts,
  increasingCartItemAction
} from '../features/productsSlice';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  timer: 3000,
  color: '#dab879',
  iconColor: '#dab879',
  background: '#000',
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

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
      dispatch(getProduct());
      Toast.fire({
        icon: 'success',
        title: 'Created product successfully'
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (product, id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.updateProduct(product, id);
      dispatch(getProduct());
      Toast.fire({
        icon: 'success',
        title: 'Updated product successfully'
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (product, id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.deleteProduct(product, id);
      Toast.fire({
        icon: 'success',
        title: 'Deleted product successfully'
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrdersAction = () => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.getOrders();
      dispatch(getOrders({ orders: result }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (id) => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.addToCart(id);

      const cartIdLocal = await localStorage.getItem('cartId');
      if (!cartIdLocal || cartIdLocal !== result.id) {
        await localStorage.setItem('cartId', result.id);
      }
      dispatch(getCartAction());
      Toast.fire({
        icon: 'success',
        title: 'Added product to cart successfully'
      });
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: "Can't add more product"
      });
    }
  };
};

export const increasingCartItem = (id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.increasingCartItem(id);
      dispatch(increasingCartItemAction({ id }));
      dispatch(getCartAction());
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: "Can't add more product"
      });
    }
  };
};

export const decreasingCartItem = (id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.decreasingCartItem(id);
      dispatch(decreasingCartItemAction({ id }));
      dispatch(getCartAction());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.deleteCartItem(id);
      Toast.fire({
        icon: 'success',
        title: 'Deleted cart item successfully'
      });
      dispatch(getCartAction());
    } catch (error) {
      console.log(err);
    }
  };
};

export const createOrder = () => {
  return async (dispatch) => {
    try {
      await craftBeerApi.createOrder();
      dispatch(checkOut());
      Toast.fire({
        icon: 'success',
        title: 'Checkout successfully'
      });
      dispatch(getCartAction());
    } catch (error) {
      console.log(error);
    }
  };
};
