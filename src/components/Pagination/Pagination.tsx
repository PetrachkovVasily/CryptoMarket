import { HUNDRED, ONE } from "../../constants/notes";
import { useAppDispatch } from "../../hooks/redux";
import { offsetSlice } from "../../store/reducers/pageSlice";
import Button from "../Button";
import { PaginationProps } from "./config";

function Pagination({ current, setCurrent }: PaginationProps) {
  const dispatch = useAppDispatch();

  function increaseOff() {
    dispatch(offsetSlice.actions.increaseOffset());
    setCurrent(current + HUNDRED);
  }

  function decreaseOff() {
    dispatch(offsetSlice.actions.decreaseOffset());
    setCurrent(current - HUNDRED);
  }

  return (
    <div className="flex w-[100%] items-center justify-center gap-[12px] font-medium">
      <Button onClick={decreaseOff} variant={"secondary"}>
        Previous
      </Button>
      <h3>Page {current / HUNDRED + ONE}</h3>
      <Button onClick={increaseOff} variant={"secondary"}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
