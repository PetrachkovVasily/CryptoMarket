import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cryptoAPI } from "../../services/cryptoService";
import { coinSlice } from "../../store/reducers/CoinSlice";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";

function MainTable() {
  const { data: coinsList } = cryptoAPI.useFetchAllCoinsQuery(100);
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);
  useEffect(() => {
    if (coinsList) {
      dispatch(coinSlice.actions.setData(coinsList));
    }
  }, [coinsList]);

  return (
    <table className="w-[100%] max-w-[1440px] table-auto text-[12px] sm:text-[14px]">
      <TableHead />
      <tbody>
        {coins ? (
          coins.data.map((item) => {
            return <TableRow key={item.id} coin={item} />;
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}

export default MainTable;
