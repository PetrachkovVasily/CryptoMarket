import { JSX } from "react/jsx-runtime";

import TableD, { DivProps } from ".";

import "../../index.css";

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
