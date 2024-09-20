import { SelectProps } from "./config";

function Select({ data, handleSelect }: SelectProps) {
  return (
    <select
      onChange={handleSelect}
      name="filters"
      className="h-[38px] w-[100%] max-w-[220px] cursor-pointer rounded-[5px] border border-gray-400 px-[8px] text-[16px] outline-gray-400 hover:bg-[#EFF2F5]"
    >
      {data.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.option}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
