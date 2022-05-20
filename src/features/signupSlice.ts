import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SingleUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface SignupState {
  users: SingleUser[];
}

const initialState: SignupState = {
  users: [],
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<SingleUser>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = signupSlice.actions;

export default signupSlice.reducer;
