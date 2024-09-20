export type fetchProps = {
  limit: number;
  currentOffset: number;
};

export type historyProps = {
  id: string;
  interval: string;
};

export type coinsData = {
  data: {
    priceUsd: "";
    time: 0;
  }[];
};
