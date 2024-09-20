import { useNavigate } from "react-router";
import Button from "../Button";
import CoinName from "../CoinName";
import { TableRowProps } from "./configs";
import { useAppDispatch } from "../../hooks/redux";
import { coinSlice } from "../../store/reducers/CoinSlice";
import TableD from "../TableD";
import { formatValue } from "../../utils/formater/textFormater";
import TextHeader from "../TextHeader";
import { ZERO } from "../../constants/notes";

function TableRow({ coin, setModalActive }: TableRowProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function toCoinPage() {
    navigate("coin/" + coin.id);
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
      <TableD variant={"primary"}>
        <Button
          onClick={showModal}
          className="w-[56px] hover:bg-[#A6B0C3]"
          variant={"tertiary"}
        >
          Add
        </Button>
      </TableD>
      <TableD variant={"secondary"}>{coin.rank}</TableD>
      <TableD variant={"tertiary"}>
        <CoinName name={coin.name} symbol={coin.symbol} />
      </TableD>
      <TableD variant={"fourth"}>
        {+coin.changePercent24Hr > ZERO ? (
          <TextHeader colorT={"green"}>
            ${formatValue(Number(coin.priceUsd))}
          </TextHeader>
        ) : (
          <TextHeader colorT={"red"}>
            ${formatValue(Number(coin.priceUsd))}
          </TextHeader>
        )}
      </TableD>

      <TableD variant={"fifth"}>
        {+coin.changePercent24Hr > ZERO ? (
          <TextHeader colorT={"green"}>
            {formatValue(Number(coin.changePercent24Hr))}%
          </TextHeader>
        ) : (
          <TextHeader colorT={"red"}>
            {formatValue(Number(coin.changePercent24Hr))}%
          </TextHeader>
        )}
      </TableD>
      <TableD variant={"sixth"}>${Number(coin.marketCapUsd).toFixed(2)}</TableD>
    </tr>
  );
}

export default TableRow;
