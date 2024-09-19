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

function MainTable() {
  const { data: coinsList } = cryptoAPI.useFetchAllCoinsQuery(100);
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);
  const [amount, setAmount] = useState<number>(0);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (coinsList) {
      dispatch(coinSlice.actions.setData(coinsList));
    }
  }, [coinsList]);

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
    <>
      <Modal
        isActive={modalActive}
        setActive={setModalActive}
        variant={"add"}
        size={"neutral"}
      >
        <h3 className="font-bold">
          Add {coins.currentCoin?.name} to briefcase
        </h3>
        <div className="flex items-center">
          <Input
            value={amount.toString()}
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
      <table className="w-[100%] max-w-[1440px] table-auto text-[12px] sm:text-[14px]">
        <TableHead />
        <tbody>
          {coins ? (
            coins.data.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  coin={item}
                  setModalActive={setModalActive}
                />
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </>
  );
}

export default MainTable;
