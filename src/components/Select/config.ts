import { ChangeEventHandler } from "react";

export type SelectProps = {
  data: {
    option: string;
    value: string;
  }[];
  handleSelect: ChangeEventHandler<HTMLSelectElement>;
};
