import { craftBeerApi } from '../../axios/craftBeerApi';
import Cookies from 'js-cookie';
import { logging } from '../features/userSlice';

export const signIn = (user) => {
  return async (dispatch) => {
    try {
      const result = await craftBeerApi.signIn(user);
      console.log(result);
      dispatch(logging({ isDisableLogginBTN: false }));
      await Cookies.set('refresh_token', result.refreshToken, {
        expires: 7
      });
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
