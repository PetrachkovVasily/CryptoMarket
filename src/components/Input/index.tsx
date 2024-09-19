import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import cn from "../../utils/cn";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

function Input({ className, variant, ...props }: InputProps) {
  return (
    <input className={cn(inputVariants({ variant, className }))} {...props} />
  );
}

export default Input;

const inputVariants = cva(
  "rounded-[5px] text h-[38px] w-[100%] max-w-[220px] ",
  {
    variants: {
      variant: {
        primary: "bg-transparent outline-none",
        secondary: "rounded-[5px] border-[1px] pl-[8px] border-gray-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
