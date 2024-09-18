import { useParams } from "react-router";
import Button from "../components/Button/index.tsx";
import CoinChart from "../components/CoinChart/index.tsx";
import CoinParams from "../components/CoinParams.tsx";
import CoinTitle from "../components/CoinTitle";
import { cryptoAPI } from "../services/cryptoService.ts";

function CoinPage() {
  const params = useParams();

  const { data: coin } = cryptoAPI.useFetchSingleCoinQuery(params.id);

  console.log(coin);

  return (
    <main className="flex h-[100%] w-screen min-w-[390px] justify-center p-[24px]">
      <div className="flex h-[100%] w-[100%] max-w-[1440px] flex-col gap-[12px] text-[16px]">
        <Button className="w-fit px-2 hover:bg-[#A6B0C3]" variant={"tertiary"}>
          Return to main page
        </Button>
        {coin ? (
          <>
            <section className="border-#EFF2F5 flex w-[100%] flex-wrap items-center justify-between gap-[16px] border-b-[2px] border-t-[2px] py-[24px]">
              <div className="flex flex-col items-center gap-[12px]">
                <CoinTitle
                  name={coin.data.name}
                  symbol={coin.data.symbol}
                  price={Number(coin.data.priceUsd).toFixed(2)}
                  change24h={Number(coin.data.changePercent24Hr).toFixed(2)}
                />
                <Button className="font-medium" variant={"secondary"}>
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
            <CoinChart />
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </main>
  );
}

export default CoinPage;
