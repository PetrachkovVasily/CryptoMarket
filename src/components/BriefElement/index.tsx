import { useState } from "react";
import Button from "../Button";
import CoinName from "../CoinName";
import Input from "../Input";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userSlice } from "../../store/reducers/userSlice";
import { BriefElementProps } from "./config";

function BriefElement({ coin }: BriefElementProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const [amount, setAmount] = useState<number>(0);

  function removeFromBrief() {
    dispatch(
      userSlice.actions.removeCoin({
        coin: user.data[
          user.data.findIndex((item) => item.coin?.id == coin.coin?.id)
        ].coin,
        amount: amount,
      }),
    );
  }

  return (
    <div className="flex justify-between">
      {coin.coin ? (
        <>
          <CoinName name={coin.coin.name} symbol={coin.coin.symbol} />
          <div className="flex items-center gap-3">
            <Input
              onChange={(e) => setAmount(-e.target.value)}
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
