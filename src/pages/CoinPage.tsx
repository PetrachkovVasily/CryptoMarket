import { useParams } from "react-router";
import Button from "../components/Button/index.tsx";
import { cryptoAPI } from "../services/cryptoService.ts";
import { useEffect, useState } from "react";
import { coinSlice } from "../store/reducers/CoinSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks/redux.ts";
import Modal from "../components/Modal/index.tsx";
import Input from "../components/Input/index.tsx";
import { Link } from "react-router-dom";
import { userSlice } from "../store/reducers/userSlice.ts";
import TextHeader from "../components/TextHeader/index.tsx";
import { ZERO } from "../constants/notes.ts";
import { SLASH } from "../constants/paths.ts";
import CoinSection from "../components/CoinSection/index.tsx";
import Loader from "../components/Loader/index.tsx";
import ErrorHeader from "../components/ErrorHeader/index.tsx";

function CoinPage() {
  const params = useParams();
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);
  const [amount, setAmount] = useState<number>(ZERO);

  const { data: coin, isError } = cryptoAPI.useFetchSingleCoinQuery(params.id);
  const [myError, setMyError] = useState(isError);

  function showModal(event: { stopPropagation: () => void }) {
    event.stopPropagation();
    setModalActive(true);
    dispatch(coinSlice.actions.setCurrent(coin?.data));
  }

  useEffect(() => {
    setMyError(isError);
  }, [isError]);

  function addToBrief() {
    dispatch(
      userSlice.actions.addCoin({
        coin: coins.currentCoin,
        amount: amount,
      }),
    );

    setAmount(ZERO);
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
          <Link to={SLASH}>Return to main page</Link>
        </Button>
        {coin ? (
          <CoinSection coin={coin} showModal={showModal} />
        ) : !myError ? (
          <Loader />
        ) : (
          <ErrorHeader />
        )}
      </div>
    </main>
  );
}

export default CoinPage;
