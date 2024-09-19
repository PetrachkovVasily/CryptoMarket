import { useNavigate } from "react-router";
import Button from "../Button";
import CoinName from "../CoinName";
import { TableRowProps } from "./configs";
import { useAppDispatch } from "../../hooks/redux";
import { coinSlice } from "../../store/reducers/CoinSlice";

function TableRow({ coin, setModalActive }: TableRowProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function toCoinPage() {
    navigate(coin.id);
  }

  function showModal(event: { stopPropagation: () => void }) {
    event.stopPropagation();
    setModalActive(true);
    dispatch(coinSlice.actions.setCurrent(coin));
  }
  return (
    <tr
      onClick={toCoinPage}
      className="border-#EFF2F5 h-[64px] w-[100%] max-w-[1440px] cursor-pointer border-b-[2px] text-left font-medium hover:bg-[#EFF2F5]"
    >
      <td className="flex h-[64px] w-[56px] items-center justify-center">
        <Button
          onClick={showModal}
          className="w-[56px] hover:bg-[#A6B0C3]"
          variant={"tertiary"}
        >
          Add
        </Button>
      </td>
      <td className="w-[30px]">{coin.rank}</td>
      <td className="ml-[4px] w-[75px]">
        <CoinName name={coin.name} symbol={coin.symbol} />
      </td>
      <td className="ml-[4px] w-[54px]">${Number(coin.priceUsd).toFixed(2)}</td>
      <td className="w-[42px]">{Number(coin.changePercent24Hr).toFixed(2)}%</td>
      <td className="ml-[12px] w-[136px]">
        ${Number(coin.marketCapUsd).toFixed(2)}
      </td>
    </tr>
  );
}

export default TableRow;
