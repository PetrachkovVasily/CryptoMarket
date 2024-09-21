import { JSX } from "react/jsx-runtime";
import "../../index.css";
import TableD, { DivProps } from ".";

export default {
  title: "TableD",
  component: TableD,
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
  <TableD {...arg}>content</TableD>
);

export const TableDStory = Template.bind({});
