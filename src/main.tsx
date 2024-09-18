import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";

const store = setupStore();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
