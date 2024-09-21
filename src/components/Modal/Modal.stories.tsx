import { JSX } from "react/jsx-runtime";

import Modal, { ModalProps } from ".";

import "../../index.css";

export default {
  title: "Modal",
  component: Modal,
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

const Template = (arg: JSX.IntrinsicAttributes & ModalProps) => (
  <Modal {...arg}>content</Modal>
);

export const ModalStory = Template.bind({});
