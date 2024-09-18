import Select from "../Select";

function HomeSection() {
  return (
    <section className="flex w-[100%] justify-between">
      <h1 className="text-[24px] font-bold">Today's Cryptocurrency Prices</h1>
      <Select />
    </section>
  );
}

export default HomeSection;
