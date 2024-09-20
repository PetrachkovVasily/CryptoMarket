export interface coinHistoryInterface {
  date: string;
  priceUsd: number;
  time: number;
}
export interface coinHistoryListInterface {
  data: coinHistoryInterface[];
}
export interface coinHistoryDateInterface {
  date: string;
}
export interface coinHistoryPriceInterface {
  priceUsd: number;
}
