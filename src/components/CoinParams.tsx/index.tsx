import CoinProperty from "../CoinProperty";

function CoinParams() {
  return (
    <ul className="flex flex-col justify-center">
      <CoinProperty title="Rank" value={1} />
      <CoinProperty title="Supply" value={"19,755,334 BTC"} />
      <CoinProperty title="Market cap" value={"$1,165,641,633,385"} />
    </ul>
  );
}

export default CoinParams;
