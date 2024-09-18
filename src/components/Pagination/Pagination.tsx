import Button from "../Button";

function Pagination() {
  return (
    <div className="flex w-[100%] items-center justify-center gap-[12px] font-medium">
      <Button variant={"secondary"}>Previous</Button>
      <h3>
        Page {1} of {100}
      </h3>
      <Button variant={"secondary"}>Next</Button>
    </div>
  );
}

export default Pagination;
