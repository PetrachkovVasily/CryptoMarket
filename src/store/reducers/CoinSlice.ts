import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cryptoCoin, pageCoins } from "../../utils/interfaces/cryptoInterfaces";

const initialState: pageCoins = {
  data: [],
  currentCoin: undefined,
};

function byField(fieldName: string) {
  return (a: { [x: string]: string }, b: { [x: string]: string }) =>
    a[fieldName] > b[fieldName] ? 1 : -1;
}

export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<pageCoins>) {
      state.data = action.payload.data;
    },
    sortData(state, action: PayloadAction<string>) {
      state.data = state.data.sort(byField(action.payload));
    },
    setCurrent(state, action: PayloadAction<undefined | cryptoCoin>) {
      state.currentCoin = action.payload;
    },
  },
});

export default coinSlice.reducer;
