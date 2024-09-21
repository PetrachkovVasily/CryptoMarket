import { useParams } from "react-router";
import Button from "../components/Button/index.tsx";
import { cryptoAPI } from "../services/cryptoService.ts";
import { useEffect, useState } from "react";
import { coinSlice } from "../store/reducers/CoinSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks/redux.ts";
import Modal from "../components/Modal/index.tsx";
import { Link } from "react-router-dom";
import { userSlice } from "../store/reducers/userSlice.ts";
import { MAX, ZERO } from "../constants/notes.ts";
import { SLASH } from "../constants/paths.ts";
import CoinSection from "../components/CoinSection/index.tsx";
import Loader from "../components/Loader/index.tsx";
import ErrorHeader from "../components/ErrorHeader/index.tsx";
import AddModal from "../components/AddModal/index.tsx";

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
    if (amount > ZERO && amount <= MAX) {
      dispatch(
        userSlice.actions.addCoin({
          coin: coins.currentCoin,
          amount: amount,
        }),
      );

      setAmount(ZERO);
      setModalActive(false);
    }
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
          <AddModal
            coin={coin?.data.name}
            amount={amount}
            setAmount={setAmount}
            addToBrief={addToBrief}
          />
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
