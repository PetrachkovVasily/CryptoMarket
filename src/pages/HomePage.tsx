import HomeSection from "../components/HomeSection/HomeSection";
import MainTable from "../components/MainTable/MainTable";
import Pagination from "../components/Pagination/Pagination";

function HomePage() {
  return (
    <main className="flex w-screen min-w-[390px] justify-center px-[12px] md:p-[24px]">
      <div className="flex w-[100%] max-w-[1440px] flex-col gap-[48px]">
        <HomeSection />
        <MainTable />
        <Pagination />
      </div>
    </main>
  );
}

export default HomePage;
