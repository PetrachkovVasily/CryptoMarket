import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cryptoAPI } from "../../services/cryptoService";
import { coinSlice } from "../../store/reducers/CoinSlice";

function Select() {
  const dispatch = useAppDispatch();
  function handleSelect() {
    dispatch(coinSlice.actions.sortData(""));
  }

  return (
    <select
      onChange={handleSelect}
      name="filters"
      className="h-[38px] w-[100%] max-w-[220px] cursor-pointer rounded-[5px] border border-gray-400 px-[8px] text-[16px] outline-gray-400 hover:bg-[#EFF2F5]"
    >
      <option value="value1">1</option>
      <option value="value2">2</option>
      <option value="value3">3</option>
    </select>
  );
}

export default Select;
