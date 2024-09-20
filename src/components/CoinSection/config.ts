import { MouseEventHandler } from "react";
import { singleCoin } from "../../utils/interfaces/cryptoInterfaces";

export type CoinSectionProps = {
  coin: singleCoin;
  showModal: MouseEventHandler<HTMLButtonElement>;
};
