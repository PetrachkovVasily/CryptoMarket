import { JSX } from "react/jsx-runtime";
import "../../index.css";
import Modal, { ModalProps } from ".";

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
