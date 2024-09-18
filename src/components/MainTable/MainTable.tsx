import { cryptoAPI } from "../../services/cryptoService";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";

function MainTable() {
  const { data: coins } = cryptoAPI.useFetchAllCoinsQuery(1);

  console.log(coins?.data);

  return (
    <table className="w-[100%] max-w-[1440px] table-auto text-[14px]">
      <TableHead />
      <tbody>
        {coins ? (
          coins.data.map((item) => {
            return <TableRow coin={item} />;
          })
        ) : (
          <h1>loading</h1>
        )}
      </tbody>
    </table>
  );
}

export default MainTable;
