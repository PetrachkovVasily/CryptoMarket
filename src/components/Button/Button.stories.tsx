import { JSX } from "react/jsx-runtime";
import Button, { ButtonProps } from ".";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      type: "string",
      description: "button",
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (arg: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button {...arg}>Add</Button>
);

export const ButtonStory = Template.bind({});
