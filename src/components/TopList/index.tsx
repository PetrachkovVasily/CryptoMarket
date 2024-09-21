import TopListItem from "../TopListItem";
import { ONE, THREE } from "../../constants/notes";
import { cryptoAPI } from "../../services/cryptoService";

function TopList() {
  const { data: coins } = cryptoAPI.useFetchAllCoinsQuery({
    limit: THREE,
    currentOffset: ONE,
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
