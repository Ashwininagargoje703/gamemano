import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    updateOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { updateOpen } = navSlice.actions;

export default navSlice.reducer;
