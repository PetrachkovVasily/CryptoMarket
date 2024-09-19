import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import BriefCost from "../BriefCost";
import Button from "../Button";
import CoinName from "../CoinName";
import Input from "../Input";

function BriefModal() {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);
  return (
    <section className="mx-[12px] flex flex-col items-center gap-[16px] md:mx-[24px]">
      <h1>My briefcase</h1>
      <BriefCost />
      <div className="m-[24px] flex max-h-[300px] w-[100%] max-w-[600px] flex-col gap-2 overflow-auto">
        {coins.data ? (
          coins.data.map((coin) => {
            return (
              <div className="flex justify-between">
                <CoinName name={coin.name} symbol={coin.symbol} />
                <div className="flex items-center gap-3">
                  <Input
                    variant={"secondary"}
                    placeholder="Remove"
                    className="w-[130px] lg:w-[172px]"
                  />
                  <Button className="h-[38px] p-[7px]">Remove</Button>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default BriefModal;
