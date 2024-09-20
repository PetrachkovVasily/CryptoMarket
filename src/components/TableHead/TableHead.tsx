import TableH from "../TableH";

function TableHead() {
  return (
    <thead>
      <tr className="border-#EFF2F5 h-[64px] w-[100%] max-w-[1440px] border-b-[2px] text-left font-bold">
        <TableH variant={"primary"}> </TableH>
        <TableH variant={"secondary"}>#</TableH>
        <TableH variant={"tertiary"}>Name</TableH>
        <TableH variant={"fourth"}>Price</TableH>
        <TableH variant={"fifth"}>24h %</TableH>
        <TableH variant={"sixth"}>Market cap</TableH>
      </tr>
    </thead>
  );
}

export default TableHead;
