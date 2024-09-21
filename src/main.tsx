import { StrictMode } from "react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";

import { router } from "./Routes/Routes.tsx";
import { persistor, store } from "./store/store.ts";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
