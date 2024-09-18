import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";

function MainTable() {
  return (
    <table className="w-[100%] max-w-[1440px] table-auto text-[14px]">
      <TableHead />
      <tbody>
        <TableRow
          index={1}
          name={"Coin"}
          price={2.22}
          marketCap={"1,165,641,633,385"}
          change24={0.77}
        />
        <TableRow
          index={1}
          name={"Coin"}
          price={2.22}
          marketCap={"1,165,641,633,385"}
          change24={0.77}
        />
        <TableRow
          index={1}
          name={"Coin"}
          price={2.22}
          marketCap={"1,165,641,633,385"}
          change24={0.77}
        />
        <TableRow
          index={1}
          name={"Coin"}
          price={2.22}
          marketCap={"1,165,641,633,385"}
          change24={0.77}
        />
      </tbody>
    </table>
  );
}

export default MainTable;
