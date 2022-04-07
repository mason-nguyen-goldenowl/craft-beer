import Cookies from 'js-cookie';

import { craftBeerApi } from '../../axios/craftBeerApi';
import { logging } from '../features/userSlice';

export const signIn = (user) => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.signIn(user);

      dispatch(logging({ isDisableLogginBTN: false }));
      await Cookies.set('refresh_token', result.refreshToken, {
        expires: 7
      });
      await Cookies.set('email', result.user.email);
      await Cookies.set('isLogged', true, { expires: 1 });
      localStorage.setItem('access_token', result.accessToken);
      if (result.user.is_admin) {
        await Cookies.set('isAdmin', result.user.is_admin);
      }
    } catch (error) {
      dispatch(logging({ isDisableLogginBTN: false }));
      console.log(error);
    }
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    try {
      await craftBeerApi.signUp(user);
      dispatch(signUp({ signUpSuccess: true }));
    } catch (error) {
      console.log(error);
    }
  };
};
