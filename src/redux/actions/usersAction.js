import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { craftBeerApi } from '../../axios/craftBeerApi';
import { logging, logOut, signUp } from '../features/userSlice';

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
export const signIn = (user) => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.signIn(user);
      console.log(user);
      dispatch(logging({ isLogged: true }));
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      });
      Cookies.set('refresh_token', result.refreshToken, {
        expires: 100
      });
      localStorage.setItem('email', result.user.email);
      Cookies.set('isLogged', true, { expires: 1 });
      localStorage.setItem('access_token', result.accessToken);
      if (result.user.is_admin) {
        Cookies.set('isAdmin', result.user.is_admin);
      }
    } catch (error) {
      dispatch(logging({ isLogged: false, email: result.user.email }));
      Toast.fire({
        icon: 'error',
        title: 'Please check your information'
      });
    }
  };
};

export const signUpAction = (user) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.signUp(user);
      Toast.fire({
        icon: 'success',
        title: 'Signed up successfully'
      });
      dispatch(signUp({ signUpSuccess: true }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logOutAction = () => {
  return async (dispatch) => {
    try {
      Cookies.remove('isLogged');
      Cookies.remove('refresh_token');
      localStorage.clear();
      console.log('first');
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };
};
