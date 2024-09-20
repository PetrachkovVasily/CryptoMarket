import TextHeader from "../TextHeader";
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
        <TextHeader variant={"secondary"}>
          <h3>{name}</h3>
        </TextHeader>
        <TextHeader variant={"tertiary"}>
          <h3>{symbol}</h3>
        </TextHeader>
      </div>
    </div>
  );
}

export default CoinName;
