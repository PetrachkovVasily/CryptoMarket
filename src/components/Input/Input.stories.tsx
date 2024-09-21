import { JSX } from "react/jsx-runtime";

import Input, { InputProps } from ".";

import "../../index.css";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    variant: {
      type: "string",
      description: "input",
      defaultValue: "primary",
      options: ["primary", "secondary"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (arg: JSX.IntrinsicAttributes & InputProps) => (
  <Input {...arg} placeholder="text" />
);

export const InputStory = Template.bind({});
