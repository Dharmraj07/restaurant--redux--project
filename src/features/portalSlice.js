// src/features/portalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const portalSlice = createSlice({
  name: "portal",
  initialState,
  reducers: {
    togglePortal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { togglePortal } = portalSlice.actions;
export default portalSlice.reducer;
