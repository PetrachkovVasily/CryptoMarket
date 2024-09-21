import Button from "../Button";
import Input from "../Input";
import TextHeader from "../TextHeader";
import { AddModalProps } from "./config";

function AddModal({ coin, amount, setAmount, addToBrief }: AddModalProps) {
  return (
    <>
      <TextHeader>
        <h3>Add {coin} to briefcase</h3>
      </TextHeader>
      <div className="flex items-center">
        <Input
          value={amount.toString()}
          onChange={(e) => setAmount(+e.target.value)}
          className="h-[42px]"
          variant={"secondary"}
          placeholder="Add coin"
        />
        <Button onClick={addToBrief} variant={"secondary"}>
          Add
        </Button>
      </div>
    </>
  );
}

export default AddModal;
