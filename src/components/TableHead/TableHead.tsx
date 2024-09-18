function TableHead() {
  return (
    <thead>
      <tr className="border-#EFF2F5 h-[64px] w-[100%] max-w-[1440px] border-b-[2px] text-left font-bold">
        <th className="w-[56px]"></th>
        <th className="w-[30px]">#</th>
        <th className="ml-[4px] w-[75px]">Name</th>
        <th className="ml-[4px] w-[54px]">Price</th>
        <th className="w-[42px]">24h %</th>
        <th className="ml-[12px] w-[136px]">Market cap</th>
      </tr>
    </thead>
  );
}

export default TableHead;
