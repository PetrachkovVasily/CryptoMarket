import { HOUR_1, HOUR_12, DAY } from "./intervals";

export const ZERO = 0;
export const ONE = 1;
export const HUNDRED = 100;
export const THREE = 3;

export const SPACE = " ";

export const chartSelectData = [
  { value: HOUR_1, option: "1 hour" },
  { value: HOUR_12, option: "12 hours" },
  { value: DAY, option: "1 day" },
];

export const tableSelectData = [
  { value: "priceUsd", option: "Price" },
  { value: "marketCapUsd", option: "Market cap" },
  { value: "changePercent24Hr", option: "24h %" },
];
