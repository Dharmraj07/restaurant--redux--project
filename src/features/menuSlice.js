// src/features/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialMenuItems = [
  { id: 1, name: "Margherita Pizza", price: 10 },
  { id: 2, name: "Caesar Salad", price: 7 },
  { id: 3, name: "Spaghetti Carbonara", price: 12 },
  { id: 4, name: "Grilled Chicken Sandwich", price: 8 },
];

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: initialMenuItems,
  },
  reducers: {},
});

export default menuSlice.reducer;
