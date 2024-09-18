import { CoinPropertyProps } from "./config";

function CoinProperty({ title, value }: CoinPropertyProps) {
  return (
    <li className="font-normal">
      <span className="font-bold">{title}:</span> {value}
    </li>
  );
}

export default CoinProperty;
