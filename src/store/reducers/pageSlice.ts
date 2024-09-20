import { createSlice } from "@reduxjs/toolkit";

export type currentOffset = {
  currentOffset: number;
};

const initialState: currentOffset = {
  currentOffset: 0,
};

export const offsetSlice = createSlice({
  name: "offset",
  initialState,
  reducers: {
    increaseOffset(state) {
      state.currentOffset += 100;
    },
    decreaseOffset(state) {
      state.currentOffset -= 100;
    },
  },
});

export default offsetSlice.reducer;
