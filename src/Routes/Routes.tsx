import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import CoinPage from "../pages/CoinPage";
import ErrorPage from "../pages/ErrorPage";
import { EVERY, ID, SLASH } from "../constants/paths";

export const router = createBrowserRouter([
  {
    path: SLASH,
    element: <App />,
    children: [
      { path: SLASH, element: <HomePage /> },
      { path: ID, element: <CoinPage /> },
      { path: EVERY, element: <ErrorPage /> },
    ],
  },
]);
