import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleProduct } from "./productSlice";

export interface ProductsState {
  cart: SingleProduct[];
  cartCount: number;
}

const initialState: ProductsState = {
  cart: [],
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<SingleProduct>) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
