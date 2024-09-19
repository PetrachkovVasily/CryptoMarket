import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cryptoAPI } from "../../services/cryptoService";
import { coinSlice } from "../../store/reducers/CoinSlice";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

function MainTable() {
  const { data: coinsList } = cryptoAPI.useFetchAllCoinsQuery(100);
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (coinsList) {
      dispatch(coinSlice.actions.setData(coinsList));
    }
  }, [coinsList]);

  return (
    <>
      <Modal
        isActive={modalActive}
        setActive={setModalActive}
        variant={"add"}
        size={"neutral"}
        className="flex h-[120px] w-[370px] flex-col items-center gap-[20px]"
      >
        <h3 className="font-bold">
          Add {coins.currentCoin?.name} to briefcase
        </h3>
        <div className="flex items-center">
          <Input
            className="h-[42px]"
            variant={"secondary"}
            placeholder="Add coin"
          />
          <Button variant={"secondary"}>Add</Button>
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
