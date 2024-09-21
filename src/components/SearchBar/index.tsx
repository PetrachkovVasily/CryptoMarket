import { useState } from "react";

import { redirect, useNavigate } from "react-router";

import Icon from "../Icon";
import Input from "../Input";
import Button from "../Button";
import { EMPTY } from "../../constants/paths";
import { useAppSelector } from "../../hooks/redux";

function SearchBar() {
  const coins = useAppSelector((state) => state.coinReducer);
  const [coinName, setCoinName] = useState(EMPTY);
  const navigate = useNavigate();
  function toCoinPage() {
    let coinId = EMPTY;

    coinId =
      coins.data.find((coin) => {
        return coin.name.toLowerCase() == coinName.toLowerCase();
      })?.id || coinName;

    navigate("coin/" + coinId);
    redirect(coinId);
    setCoinName(EMPTY);
  }
  return (
    <div className="flex h-fit items-center justify-between rounded-[5px] bg-[#EFF2F5] px-[8px] hover:border-[#A6B0C3]">
      <Input
        id="search"
        value={coinName}
        onChange={(e) => setCoinName(e.target.value)}
        placeholder="Search"
      />
      <Button
        id="serchIcon"
        onClick={toCoinPage}
        className="h-[20px] w-[20px] cursor-pointer border-none p-0"
      >
        <Icon />
      </Button>
    </div>
  );
}

export default SearchBar;
