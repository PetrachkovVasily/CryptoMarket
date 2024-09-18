import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pageCoins, singleCoin } from "../utils/interfaces/cryptoInterfaces";

export const cryptoAPI = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coincap.io/v2/assets" }),
  endpoints: (build) => ({
    fetchAllCoins: build.query<pageCoins, number>({
      query: () => ({
        url: "",
        params: {},
      }),
    }),
    fetchSingleCoin: build.query<singleCoin, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/${id}`,
      }),
    }),
  }),
});
