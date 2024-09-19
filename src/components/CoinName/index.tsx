import { CoinNameProps } from "./config";

function CoinName({ name, symbol }: CoinNameProps) {
  return (
    <div className="flex w-[90px] items-center overflow-hidden md:w-[120px]">
      <img
        className="mr-2 h-[24px] w-[24px]"
        src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        alt="icon"
      />
      <div className="flex flex-col">
        <h3 className="w-[90px] overflow-hidden">{name}</h3>
        <h3 className="text-[#A6B0C3]">{symbol}</h3>
      </div>
    </div>
  );
}

export default CoinName;
