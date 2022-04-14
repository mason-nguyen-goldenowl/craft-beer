import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    signUpSuccess: false,
    isLoggedSusscess: Cookies.get('isLogged'),
    email: Cookies.get('email')
  },
  reducers: {
    signUp(state, action) {
      state.signUpSuccess = action.payload.signUpSuccess;
    },

    logging(state, action) {
      state.isLoggedSusscess = action.payload.isLogged;
      state.email = action.payload.email;
    },
    logOut(state, action) {
      state.isLoggedSusscess = false;
    }
  }
});

export const selectUsers = (state) => state.users;
export const { signUp, logging, logOut } = userSlice.actions;
export default userSlice.reducer;
