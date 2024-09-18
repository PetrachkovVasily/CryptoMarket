import CoinName from "../CoinName";
import { CoinTitleProps } from "./config";

function CoinTitle({ name, symbol, price, change24h }: CoinTitleProps) {
  return (
    <div>
      <div>
        <CoinName name={name} symbol={symbol} />
      </div>
      <div className="flex flex-wrap items-center gap-[6px]">
        <h1 className="text-[40px] font-bold">${price}</h1>
        <h3 className="text-[14px] font-semibold">{change24h}%</h3>
      </div>
    </div>
  );
}

export default CoinTitle;
