import { SPACE, ZERO } from "../../constants/notes";
import { formatValue } from "../../utils/formater/textFormater";
import { TopListProps } from "./config";

function TopListItem({ coin }: TopListProps) {
  return (
    <pre>
      {coin.symbol}:{SPACE}
      <span className="font-medium text-blue-600">
        {+coin.priceUsd > ZERO ? (
          <>{formatValue(Number(coin.priceUsd))}$</>
        ) : (
          <>{formatValue(Number(coin.priceUsd))}$</>
        )}
      </span>
    </pre>
  );
}

export default TopListItem;
