import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cryptoAPI } from "../../services/cryptoService";
import { coinSlice } from "../../store/reducers/CoinSlice";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { userSlice } from "../../store/reducers/userSlice";
import { MainProps } from "./config";
import TextHeader from "../TextHeader";
import { HUNDRED, MAX, ZERO } from "../../constants/notes";
import Loader from "../Loader";

function MainTable({ current }: MainProps) {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);
  const [amount, setAmount] = useState<number>(0);
  const { data: coinsList, isLoading } = cryptoAPI.useFetchAllCoinsQuery({
    limit: HUNDRED,
    currentOffset: current,
  });

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (coinsList) {
      dispatch(coinSlice.actions.setData(coinsList));
    }
  }, [coinsList, current]);

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
    <>
      <Modal
        isActive={modalActive}
        setActive={setModalActive}
        variant={"add"}
        size={"neutral"}
      >
        <TextHeader>
          <h3>Add {coins.currentCoin?.name} to briefcase</h3>
        </TextHeader>
        <div className="flex items-center">
          <Input
            value={amount.toString()}
            min={1}
            max={999}
            onChange={(e) => setAmount(+e.target.value)}
            className="h-[42px]"
            variant={"secondary"}
            placeholder="Add coin"
            type="number"
          />
          <Button onClick={addToBrief} variant={"secondary"}>
            Add
          </Button>
        </div>
      </Modal>
      {!isLoading ? (
        <table className="w-[100%] max-w-[1440px] table-auto text-[12px] sm:text-[14px]">
          <TableHead />
          <tbody>
            {coins.data.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  coin={item}
                  setModalActive={setModalActive}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MainTable;
