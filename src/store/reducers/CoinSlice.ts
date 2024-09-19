import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageCoins } from "../../utils/interfaces/cryptoInterfaces";

const initialState: pageCoins = {
  data: [],
};

export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<pageCoins>) {
      state.data = action.payload.data;
    },
    sortData(state, action: PayloadAction<string>) {
      console.log("as");
      state.data = state.data.sort();
    },
  },
});

export default coinSlice.reducer;
