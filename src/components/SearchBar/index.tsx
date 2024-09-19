import { useState } from "react";
import Input from "../Input";
import { redirect, useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/redux";

function SearchBar() {
  const coins = useAppSelector((state) => state.coinReducer);
  const [coinName, setCoinName] = useState("");
  const navigate = useNavigate();
  function toCoinPage() {
    let coinId = "";

    coinId =
      coins.data.find((coin) => {
        return coin.name.toLowerCase() == coinName.toLowerCase();
      })?.id || coinName;

    navigate(coinId);
    redirect(coinId);
  }
  return (
    <div className="flex h-fit items-center justify-between rounded-[5px] bg-[#EFF2F5] px-[8px] hover:border-[#A6B0C3]">
      <Input
        value={coinName}
        onChange={(e) => setCoinName(e.target.value)}
        placeholder="Search"
      />
      <img
        onClick={toCoinPage}
        className="h-[20px] w-[20px] cursor-pointer"
        src="src\assets\searchIcon.svg"
        alt="search icon"
      />
    </div>
  );
}

export default SearchBar;
