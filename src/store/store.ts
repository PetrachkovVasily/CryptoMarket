import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cryptoAPI } from "../services/cryptoService";
import coinReducer from "./reducers/CoinSlice";
import userReducer from "./reducers/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [cryptoAPI.reducerPath, "coinReducer", "userReducer"],
};

const rootReducer = combineReducers({
  coinReducer,
  userReducer,
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
