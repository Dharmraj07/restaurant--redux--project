// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import cartReducer from "../features/cartSlice";
import portalReducer from "../features/portalSlice"; // Import the new portal reducer

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    portal: portalReducer, // Add portal to the store
  },
});
