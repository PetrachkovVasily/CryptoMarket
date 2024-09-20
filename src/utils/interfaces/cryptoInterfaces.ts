export type cryptoCoin = {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  priceUsd: string;
  changePercent24Hr: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
};

export type pageCoins = {
  data: cryptoCoin[];
  currentCoin: undefined | cryptoCoin;
};

export type singleCoin = {
  data: cryptoCoin;
};

export type myCoin = {
  coin: cryptoCoin | undefined;
  amount: number;
};

export type briefCoins = {
  data: myCoin[];
  dataBrief: cryptoCoin[];
};

export type currentOffset = {
  currentOffset: number;
};
