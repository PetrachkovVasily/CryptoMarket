import CoinName from "../CoinName";
import TextHeader from "../TextHeader";
import { CoinTitleProps } from "./config";
import { ZERO } from "../../constants/notes";
import { formatValue } from "../../utils/formater/textFormater";

function CoinTitle({ name, symbol, price, change24h }: CoinTitleProps) {
  return (
    <div>
      <div>
        <CoinName name={name} symbol={symbol} />
      </div>
      <div className="flex flex-wrap items-center gap-[6px]">
        <h1 className="text-[40px] font-bold">${formatValue(+price)}</h1>
        {+change24h > ZERO ? (
          <TextHeader variant={"fourth"} colorT={"green"}>
            {formatValue(+change24h)}%
          </TextHeader>
        ) : (
          <TextHeader variant={"fourth"} colorT={"red"}>
            {formatValue(+change24h)}%
          </TextHeader>
        )}
      </div>
    </div>
  );
}

export default CoinTitle;
