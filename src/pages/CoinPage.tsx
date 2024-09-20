import { useParams } from "react-router";
import Button from "../components/Button/index.tsx";
import CoinChart from "../components/CoinChart/index.tsx";
import CoinParams from "../components/CoinParams.tsx";
import CoinTitle from "../components/CoinTitle";
import { cryptoAPI } from "../services/cryptoService.ts";
import { useState } from "react";
import { coinSlice } from "../store/reducers/CoinSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks/redux.ts";
import Modal from "../components/Modal/index.tsx";
import Input from "../components/Input/index.tsx";
import { Link } from "react-router-dom";
import { userSlice } from "../store/reducers/userSlice.ts";
import TextHeader from "../components/TextHeader/index.tsx";

function CoinPage() {
  const params = useParams();
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);
  const [amount, setAmount] = useState<number>(0);

  const { data: coin } = cryptoAPI.useFetchSingleCoinQuery(params.id);

  function showModal(event: { stopPropagation: () => void }) {
    event.stopPropagation();
    setModalActive(true);
    dispatch(coinSlice.actions.setCurrent(coin?.data));
  }

  function addToBrief() {
    dispatch(
      userSlice.actions.addCoin({
        coin: coins.currentCoin,
        amount: amount,
      }),
    );

    setAmount(0);
    setModalActive(false);
  }

  return (
    <main className="flex h-[100%] w-screen min-w-[390px] justify-center p-[24px]">
      <div className="flex h-[100%] w-[100%] max-w-[1440px] flex-col gap-[12px] text-[16px]">
        <Modal
          isActive={modalActive}
          setActive={setModalActive}
          variant={"add"}
          size={"neutral"}
        >
          <TextHeader>
            <h3>Add {coin?.data.name} to briefcase</h3>
          </TextHeader>
          <div className="flex items-center">
            <Input
              value={amount.toString()}
              onChange={(e) => setAmount(+e.target.value)}
              className="h-[42px]"
              variant={"secondary"}
              placeholder="Add coin"
            />
            <Button onClick={addToBrief} variant={"secondary"}>
              Add
            </Button>
          </div>
        </Modal>
        <Button className="w-fit px-2 hover:bg-[#A6B0C3]" variant={"tertiary"}>
          <Link to={"/"}>Return to main page</Link>
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
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </main>
  );
}

export default CoinPage;
