import Select from "../Select";

function HomeSection() {
  return (
    <section className="flex w-[100%] flex-col gap-[16px] md:flex-row md:justify-between">
      <h1 className="text-[24px] font-bold">Today's Cryptocurrency Prices</h1>
      <Select />
    </section>
  );
}

export default HomeSection;
