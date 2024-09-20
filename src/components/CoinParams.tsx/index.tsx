import CoinProperty from "../CoinProperty";
import { CoinParamsProps } from "./config";

function CoinParams({ rank, supply, maxSupply, marketCap }: CoinParamsProps) {
  return (
    <ul className="flex flex-col justify-center">
      <CoinProperty title="Rank" value={rank} />
      <CoinProperty title="Supply" value={supply} />
      <CoinProperty title="Max supply" value={maxSupply} />
      <span className="flex">
        <CoinProperty title="Market cap" value={marketCap} />$
      </span>
    </ul>
  );
}

export default CoinParams;
