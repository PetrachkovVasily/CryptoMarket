import { cryptoAPI } from "../../services/cryptoService";
import TopListItem from "../TopListItem";

function TopList() {
  const { data: coins } = cryptoAPI.useFetchAllCoinsQuery({
    limit: 3,
    currentOffset: 0,
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-[14px]">
      {coins ? (
        coins.data.map((item) => {
          return <TopListItem key={item.id} coin={item} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default TopList;
