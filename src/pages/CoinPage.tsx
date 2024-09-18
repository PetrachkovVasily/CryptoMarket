import Button from "../components/Button/index.tsx";
import CoinChart from "../components/CoinChart/index.tsx";
import CoinParams from "../components/CoinParams.tsx";
import CoinTitle from "../components/CoinTitle";

function CoinPage() {
  return (
    <main className="flex h-[100%] w-screen min-w-[390px] justify-center p-[24px]">
      <div className="flex h-[100%] w-[100%] max-w-[1440px] flex-col gap-[12px] text-[16px]">
        <Button className="w-fit px-2 hover:bg-[#A6B0C3]" variant={"tertiary"}>
          Return to main page
        </Button>
        <section className="border-#EFF2F5 flex w-[100%] flex-wrap items-center justify-between gap-[16px] border-b-[2px] border-t-[2px] py-[24px]">
          <div className="flex flex-col items-center gap-[12px]">
            <CoinTitle />
            <Button className="font-medium" variant={"secondary"}>
              Add
            </Button>
          </div>
          <CoinParams />
        </section>
        <CoinChart />
      </div>
    </main>
  );
}

export default CoinPage;
