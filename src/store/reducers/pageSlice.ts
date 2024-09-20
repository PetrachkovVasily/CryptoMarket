import { createSlice } from "@reduxjs/toolkit";
import { HUNDRED } from "../../constants/notes";
import { currentOffset } from "../../utils/interfaces/cryptoInterfaces";

const initialState: currentOffset = {
  currentOffset: 0,
};

export const offsetSlice = createSlice({
  name: "offset",
  initialState,
  reducers: {
    increaseOffset(state) {
      state.currentOffset += HUNDRED;
    },
    decreaseOffset(state) {
      state.currentOffset -= HUNDRED;
    },
  },
});

export default offsetSlice.reducer;
