import Button from "../Button";
import { TableRowProps } from "./configs";

function TableRow({ ...props }: TableRowProps) {
  return (
    <tr className="border-#EFF2F5 h-[64px] w-[100%] max-w-[1440px] cursor-pointer border-b-[2px] text-left font-medium hover:bg-[#EFF2F5]">
      <td className="flex h-[64px] w-[56px] items-center justify-center">
        <Button className="w-[56px] hover:bg-[#A6B0C3]" variant={"tertiary"}>
          Add
        </Button>
      </td>
      <td>{props.index}</td>
      <td className="ml-[12px] w-[54px]">{props.name}</td>
      <td className="w-[54px]">${props.price}</td>
      <td className="ml-[12px] w-[136px]">${props.marketCap}</td>
      <td className="w-[42px]">{props.change24}%</td>
    </tr>
  );
}

export default TableRow;
