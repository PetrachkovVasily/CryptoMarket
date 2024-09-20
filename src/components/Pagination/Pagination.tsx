import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { offsetSlice } from "../../store/reducers/pageSlice";
import Button from "../Button";
import { PaginationProps } from "./config";

function Pagination({ current, setCurrent }: PaginationProps) {
  const dispatch = useAppDispatch();
  const coins = useAppSelector((state) => state.coinReducer);
  const currentOffset = useAppSelector((state) => state.offsetReducer);

  function increaseOff() {
    dispatch(offsetSlice.actions.increaseOffset());
    setCurrent(current + 100);
    console.log(coins);
  }

  function decreaseOff() {
    dispatch(offsetSlice.actions.decreaseOffset());
    setCurrent(current - 100);
  }

  return (
    <div className="flex w-[100%] items-center justify-center gap-[12px] font-medium">
      <Button onClick={decreaseOff} variant={"secondary"}>
        Previous
      </Button>
      <h3>Page {current / 100 + 1}</h3>
      <Button onClick={increaseOff} variant={"secondary"}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
