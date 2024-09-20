import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/userSlice";
import { BriefElementProps } from "./config";
import { cryptoAPI } from "../../services/cryptoService";

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
    const isBrief = user.data.findIndex(
      (item) => item.coin?.id == coin.coin?.id,
    );
    dispatch(
      userSlice.actions.removeCoin({
        coin: user.data[
          user.data.findIndex((item) => item.coin?.id == coin.coin?.id)
        ].coin,
        amount: amount,
      }),
    );
    if (user.data[isBrief].amount <= coin.amount && coin.coin) {
      dispatch(userSlice.actions.removeAPICoinData(coin.coin));
    }
    setAmount(0);
  }

  function calculateBrief() {
    let diff = 0;
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

  return (
    <div className="flex items-center justify-between">
      {coin.coin ? (
        <>
          <img
            className="mr-2 h-[24px] w-[24px]"
            src={`https://assets.coincap.io/assets/icons/${coin.coin.symbol.toLowerCase()}@2x.png`}
            alt="icon"
          />
          <h3>{calculateBrief().toFixed(2)}</h3>
          <div className="flex items-center gap-3">
            <h3>{coin.amount}</h3>
            <Input
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
