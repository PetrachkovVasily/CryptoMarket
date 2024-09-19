import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cryptoCoin } from "../../utils/interfaces/cryptoInterfaces";

const initialState: briefCoins = {
  data: [],
};

export type myCoin = {
  coin: cryptoCoin | undefined;
  amount: number;
};

export type briefCoins = {
  data: myCoin[];
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCoin(state, action: PayloadAction<myCoin>) {
      const isBrief = state.data.findIndex(
        (coin) => coin.coin?.id == action.payload.coin?.id,
      );
      if (isBrief != -1) {
        state.data[isBrief].amount += action.payload.amount;
      } else {
        state.data.push(action.payload);
      }
    },
    removeCoin(state, action: PayloadAction<myCoin>) {
      console.log(action.payload.amount);

      const isBrief = state.data.findIndex(
        (n) => n.coin?.id === action.payload.coin?.id,
      );
      if (state.data[isBrief].amount <= action.payload.amount) {
        state.data.splice(
          state.data.findIndex((n) => n.coin?.id === action.payload.coin?.id),
          1,
        );
      } else {
        state.data[isBrief].amount -= action.payload.amount;
      }
    },
  },
});

export default userSlice.reducer;
