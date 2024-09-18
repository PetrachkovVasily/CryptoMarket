import CoinProperty from "../CoinProperty";
import { CoinParamsProps } from "./config";

function CoinParams({ rank, supply, maxSupply, marketCap }: CoinParamsProps) {
  console.log(rank);

  return (
    <ul className="flex flex-col justify-center">
      <CoinProperty title="Rank" value={rank} />
      <CoinProperty title="Supply" value={supply} />
      <CoinProperty title="Max supply" value={supply} />
      <CoinProperty title="Market cap" value={"$" + marketCap} />
    </ul>
  );
}

export default CoinParams;
