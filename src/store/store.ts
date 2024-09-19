import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cryptoAPI } from "../services/cryptoService";
import coinReducer from "./reducers/CoinSlice";

const rootReducer = combineReducers({
  coinReducer,
  [cryptoAPI.reducerPath]: cryptoAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cryptoAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
