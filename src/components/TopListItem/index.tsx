import { TableRowProps } from "../TableRow/configs";

function TopListItem({ coin }: TableRowProps) {
  return (
    <pre>
      {coin.symbol + ":"}{" "}
      <span className="font-medium text-blue-600">
        {Number(coin.priceUsd).toFixed(2) + "$"}
      </span>
    </pre>
  );
}

export default TopListItem;
