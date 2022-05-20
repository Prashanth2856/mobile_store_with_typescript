import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import signupReducer from "../features/signupSlice";

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    cartReducer: cartReducer,
    signupReducer: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
