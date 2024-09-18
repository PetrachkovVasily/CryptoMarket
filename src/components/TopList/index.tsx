import TopListItem from "../TopListItem";

function TopList() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-[14px]">
      <TopListItem />
      <TopListItem />
      <TopListItem />
    </div>
  );
}

export default TopList;
