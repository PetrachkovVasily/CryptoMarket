import { MouseEventHandler } from "react";

export type AddModalProps = {
  coin: string | undefined;
  amount: number;
  setAmount: Function;
  addToBrief: MouseEventHandler<HTMLButtonElement>;
};
