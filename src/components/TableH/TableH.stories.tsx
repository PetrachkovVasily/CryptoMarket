import { JSX } from "react/jsx-runtime";
import "../../index.css";
import TableH, { DivProps } from ".";

export default {
  title: "TableH",
  component: TableH,
  argTypes: {
    variant: {
      type: "string",
      description: "input",
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary", "fourth", "fifth", "sixth"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (arg: JSX.IntrinsicAttributes & DivProps) => (
  <TableH {...arg}>content</TableH>
);

export const TableHStory = Template.bind({});
