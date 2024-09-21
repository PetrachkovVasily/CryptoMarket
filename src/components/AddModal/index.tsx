import Input from "../Input";
import Button from "../Button";
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
          id="addCoin"
          value={amount.toString()}
          onChange={(e) => {
            if (!isNaN(+e.target.value)) setAmount(+e.target.value);
          }}
          className="h-[42px]"
          variant={"secondary"}
          placeholder="Add coin"
        />
        <Button id="addToBriefBtn" onClick={addToBrief} variant={"secondary"}>
          Add
        </Button>
      </div>
    </>
  );
}

export default AddModal;
