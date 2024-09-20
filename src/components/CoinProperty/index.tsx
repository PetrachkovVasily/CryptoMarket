import { formatValue } from "../../utils/formater/textFormater";
import { CoinPropertyProps } from "./config";

function CoinProperty({ title, value }: CoinPropertyProps) {
  return (
    <li className="font-normal">
      <span className="font-bold">{title}:</span> {formatValue(+value)}
    </li>
  );
}

export default CoinProperty;
