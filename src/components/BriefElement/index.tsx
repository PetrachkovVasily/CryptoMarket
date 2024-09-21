import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/userSlice";
import { BriefElementProps } from "./config";
import { cryptoAPI } from "../../services/cryptoService";
import TextHeader from "../TextHeader";
import { MAX, ZERO } from "../../constants/notes";
import { formatValue } from "../../utils/formater/textFormater";

function BriefElement({ coin }: BriefElementProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const [amount, setAmount] = useState<number>(0);

  const { data: coinBrief } = cryptoAPI.useFetchSingleCoinQuery(coin.coin?.id);

  useEffect(() => {
    if (coinBrief) {
      dispatch(userSlice.actions.setAPICoinData(coinBrief.data));
    }
  }, [coinBrief]);

  function removeFromBrief() {
    if (amount > ZERO && amount <= MAX) {
      const isBrief = user.data.findIndex(
        (item) => item.coin?.id == coin.coin?.id,
      );
      dispatch(
        userSlice.actions.removeCoin({
          coin: user.data[isBrief].coin,
          amount: amount,
        }),
      );

      if (user.data[isBrief].amount <= amount && coin.coin) {
        dispatch(userSlice.actions.removeAPICoinData(coin.coin));
      }
      setAmount(ZERO);
    }
  }

  function calculateBrief() {
    let diff = ZERO;
    const isBrief = user.data.findIndex(
      (item) => item.coin?.id == coin.coin?.id,
    );

    if (
      user.data[isBrief] &&
      user.data[isBrief].coin?.priceUsd &&
      user.data[isBrief].coin &&
      user.dataBrief[isBrief]
    ) {
      diff =
        Number(user.dataBrief[isBrief].priceUsd) -
        Number(user.data[isBrief].coin.priceUsd);
    }
    return diff;
  }

  const headerDiff: {
    diff: number;
    diffString: string;
    color: "default" | "green" | "red";
  } = {
    diff: calculateBrief(),
    diffString: "",
    color: "default",
  };

  if (headerDiff.diff > ZERO) {
    headerDiff.color = "green";
    headerDiff.diffString = formatValue(headerDiff.diff);
  } else if (headerDiff.diff < ZERO) {
    headerDiff.color = "red";
    headerDiff.diffString = formatValue(headerDiff.diff);
  } else {
    headerDiff.color = "red";
    headerDiff.diffString = "0";
  }

  return (
    <div className="flex items-center justify-between gap-[8px]">
      {coin.coin ? (
        <>
          <img
            className="mr-2 h-[24px] w-[24px]"
            src={`https://assets.coincap.io/assets/icons/${coin.coin.symbol.toLowerCase()}@2x.png`}
            alt="icon"
          />
          <TextHeader>
            <TextHeader colorT={headerDiff.color}>
              {headerDiff.diffString}$
            </TextHeader>
            <h3>{formatValue(+coin.coin.priceUsd)}$</h3>
          </TextHeader>
          <div className="flex items-center gap-[8px]">
            <h3>Own: {coin.amount}</h3>
            <Input
              min={0}
              max={999}
              value={amount.toString()}
              onChange={(e) => setAmount(+e.target.value)}
              type="number"
              variant={"secondary"}
              placeholder="Remove"
              className="w-[130px] lg:w-[172px]"
            />
            <Button onClick={removeFromBrief} className="h-[38px] p-[7px]">
              Remove
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BriefElement;
