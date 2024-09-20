import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pageCoins, singleCoin } from "../utils/interfaces/cryptoInterfaces";
import { coinHistoryListInterface } from "../utils/interfaces/chartInterfaces";
import { BASE_URL, HISTORY } from "../constants/urls";
import { EMPTY } from "../constants/paths";
import {
  fetchProps,
  historyProps,
} from "../utils/interfaces/cryptoAPIInterfaces";

export const cryptoAPI = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchAllCoins: build.query<pageCoins, fetchProps>({
      query: ({ limit, currentOffset }) => ({
        url: EMPTY,
        params: {
          limit: limit,
          offset: currentOffset,
        },
      }),
    }),
    fetchSingleCoin: build.query<singleCoin, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/${id}`,
      }),
    }),
    fetchCoinHistory: build.query<coinHistoryListInterface, historyProps>({
      query: ({ id, interval }) => ({
        url: `/${id}${HISTORY}`,
        params: {
          interval: interval,
        },
      }),
    }),
  }),
});
