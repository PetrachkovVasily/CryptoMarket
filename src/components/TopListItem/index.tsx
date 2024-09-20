import { SPACE } from "../../constants/notes";
import { TopListProps } from "./config";

function TopListItem({ coin }: TopListProps) {
  return (
    <pre>
      {coin.symbol}:{SPACE}
      <span className="font-medium text-blue-600">
        {Number(coin.priceUsd).toFixed(2) + "$"}
      </span>
    </pre>
  );
}

export default TopListItem;
