import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    signUpSuccess: false,
    isLoggedSusscess: false,
    email: localStorage.getItem('email')
  },
  reducers: {
    signUp(state, action) {
      state.signUpSuccess = action.payload.signUpSuccess;
    },

    logging(state, action) {
      state.isLoggedSusscess = action.payload.isLogged;
    },
    logOut(state, action) {
      state.isLoggedSusscess = false;
    }
  }
});

export const selectUsers = (state) => state.users;
export const { signUp, logging, logOut } = userSlice.actions;
export default userSlice.reducer;
