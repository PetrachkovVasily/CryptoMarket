import { useState } from "react";
import HomeSection from "../components/HomeSection/HomeSection";
import MainTable from "../components/MainTable/MainTable";
import Pagination from "../components/Pagination/Pagination";
import { useAppSelector } from "../hooks/redux";

function HomePage() {
  const currentOffset = useAppSelector((state) => state.offsetReducer);
  const [current, setCurrent] = useState<number>(currentOffset.currentOffset);
  return (
    <main className="flex w-screen min-w-[390px] justify-center px-[12px] md:p-[24px]">
      <div className="flex w-[100%] max-w-[1440px] flex-col gap-[48px]">
        <HomeSection />
        <MainTable current={current} setCurrent={setCurrent} />
        <Pagination current={current} setCurrent={setCurrent} />
      </div>
    </main>
  );
}

export default HomePage;
