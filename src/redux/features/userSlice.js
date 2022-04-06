import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    signUpSuccess: false,
    isDisableLogginBTN: false
  },
  reducers: {
    signUp(state, action) {
      state.signUpSuccess = action.payload.signUpSuccess;
    },

    logging(state, action) {
      state.isDisableLogginBTN = action.payload.isDisableLogginBTN;
    }
  }
});

export const selectUsers = (state) => state.users;
export const { signUp, logging } = userSlice.actions;
export default userSlice.reducer;
