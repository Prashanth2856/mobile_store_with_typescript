import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SingleProduct } from "./productSlice";

export interface CartState {
  cart: SingleProduct[];
}

const initialState: CartState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || "{}")
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<SingleProduct>) => {
      state.cart.push(action.payload);

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    removeProductFromCart: (state, action: PayloadAction<SingleProduct>) => {
      const availableCartProducts = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = availableCartProducts;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeProductFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
