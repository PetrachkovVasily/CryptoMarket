function CoinTitle() {
  return (
    <div>
      <div>{"Coin name"}</div>
      <div className="flex flex-wrap items-center gap-[6px]">
        <h1 className="text-[40px] font-bold">${"2.22"}</h1>
        <h3 className="text-[14px] font-semibold">0.77%</h3>
      </div>
    </div>
  );
}

export default CoinTitle;
