import Button from "../Button";
import CoinChart from "../CoinChart";
import CoinParams from "../CoinParams.tsx";
import CoinTitle from "../CoinTitle";
import { CoinSectionProps } from "./config";

function CoinSection({ coin, showModal }: CoinSectionProps) {
  return (
    <>
      <section className="border-#EFF2F5 flex w-[100%] flex-wrap items-center justify-between gap-[16px] border-b-[2px] border-t-[2px] py-[24px]">
        <div className="flex flex-col items-center gap-[12px]">
          <CoinTitle
            name={coin.data.name}
            symbol={coin.data.symbol}
            price={Number(coin.data.priceUsd).toFixed(2)}
            change24h={Number(coin.data.changePercent24Hr).toFixed(2)}
          />
          <Button
            onClick={showModal}
            className="font-medium"
            variant={"secondary"}
          >
            Add
          </Button>
        </div>
        <CoinParams
          rank={coin.data.rank}
          supply={Number(coin.data.supply).toFixed(2)}
          maxSupply={Number(coin.data.maxSupply).toFixed(2)}
          marketCap={Number(coin.data.marketCapUsd).toFixed(2)}
        />
      </section>
      <CoinChart id={coin.data.id} />
    </>
  );
}

export default CoinSection;
