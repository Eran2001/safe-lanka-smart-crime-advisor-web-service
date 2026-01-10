import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skin: "default", // "default" | "bordered"
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    handleSkin: (state, action) => {
      state.skin = action.payload;
    },
  },
});

export const { handleSkin } = layoutSlice.actions;
export default layoutSlice.reducer;
