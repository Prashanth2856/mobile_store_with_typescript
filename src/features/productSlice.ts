import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SingleProduct {
  id: number;
  model: string;
  discount: number;
  variant: string;
  image: string;
  price: number;
}

export interface ProductsState {
  products: SingleProduct[];
  cart: SingleProduct[];
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      model: "OnePlus 9RT 5G",
      discount: 10,
      variant: "Nano silver 8 GB RAM + 128 GB ROM",
      image: "https://i.ibb.co/nssRM8n/9rt.png",
      price: 42999,
    },
    {
      id: 2,
      model: "OnePlus Nord 2 5G",
      discount: 12,
      variant: "Gray Sierra 8 GB RAM + 128 GB ROM",
      image: "https://i.ibb.co/zf9DcdV/nord2.png",
      price: 29999,
    },
    {
      id: 3,
      model: "OnePlus 9 5G",
      discount: 15,
      variant: "Astral Black 8 GB RAM + 128 GB ROM",
      image: "https://i.ibb.co/nk0LSkj/9.png",
      price: 44999,
    },
    {
      id: 4,
      model: "OnePlus 9 Pro 5G",
      discount: 5,
      variant: "Morning Mist 8 GB RAM + 128 GB ROM",
      image: "https://i.ibb.co/W2rDw6N/9pro.png",
      price: 59999,
    },
    {
      id: 5,
      model: "OnePlus Nord CE 2 5G",
      discount: 20,
      variant: "Bahama Blue 6 GB RAM + 128 GB ROM",
      image: "https://i.ibb.co/r4spHKM/nordce2.png",
      price: 23999,
    },
    {
      id: 6,
      model: "OnePlus Nord CE 5G",
      discount: 16,
      variant: "Charcoal Ink 12 GB RAM + 256 GB ROM",
      image: "https://i.ibb.co/LJ1WRhq/nordce.png",
      price: 27999,
    },
    {
      id: 7,
      model: "OnePlus 8T",
      discount: 9,
      variant: "Lunar Silver 8 GB RAM + 128 GB ROM",
      image: "https://i.ibb.co/SX3K0Q6/8t.png",
      price: 38999,
    },
    {
      id: 8,
      model: "OnePlus 8 Pro",
      discount: 18,
      variant: "Glacial Green 8 GB RAM + 128 GB ROM",
      image: "https://i.ibb.co/943rpNp/8pro.png",
      price: 58999,
    },
  ],
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || "{}")
    : [],
};

export const productSlice = createSlice({
  name: "products",
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

export const { addToCart, removeProductFromCart,clearCart } = productSlice.actions;
// export const { sortLowToHigh } = productSlice.actions;

export default productSlice.reducer;
