import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import coinReducer from "./reducers/CoinSlice";
import userReducer from "./reducers/userSlice";
import offsetReducer from "./reducers/pageSlice";
import { cryptoAPI } from "../services/cryptoService";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [cryptoAPI.reducerPath, "coinReducer"],
};

const rootReducer = combineReducers({
  coinReducer,
  userReducer,
  offsetReducer,
  [cryptoAPI.reducerPath]: cryptoAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(cryptoAPI.middleware),
  });
};

export const store = setupStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
