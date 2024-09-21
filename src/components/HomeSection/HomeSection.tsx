import Select from "../Select";
import { useAppDispatch } from "../../hooks/redux";
import { tableSelectData } from "../../constants/notes";
import { coinSlice } from "../../store/reducers/CoinSlice";
function HomeSection() {
  const data = tableSelectData;

  const dispatch = useAppDispatch();
  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(coinSlice.actions.sortData(event.target.value));
  }
  return (
    <section className="flex w-[100%] flex-col gap-[16px] md:flex-row md:justify-between">
      <h1 className="text-[24px] font-bold">Today's Cryptocurrency Prices</h1>
      <Select data={data} handleSelect={handleSelect} />
    </section>
  );
}

export default HomeSection;
