function Select() {
  return (
    <select
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
