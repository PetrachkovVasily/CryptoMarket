import { useAppDispatch } from "../../hooks/redux";
import { coinSlice } from "../../store/reducers/CoinSlice";

function Select() {
  const dispatch = useAppDispatch();
  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(coinSlice.actions.sortData(event.target.value));
  }

  return (
    <select
      onChange={handleSelect}
      name="filters"
      className="h-[38px] w-[100%] max-w-[220px] cursor-pointer rounded-[5px] border border-gray-400 px-[8px] text-[16px] outline-gray-400 hover:bg-[#EFF2F5]"
    >
      <option value="priceUsd">Price</option>
      <option value="marketCapUsd">Market cap</option>
      <option value="changePercent24Hr">24h %</option>
    </select>
  );
}

export default Select;
