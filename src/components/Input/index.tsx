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

const inputVariants = cva("rounded-[5px]", {
  variants: {
    variant: {
      primary:
        "text h-[38px] w-[100%] max-w-[220px] text-[#A6B0C3] bg-transparent outline-none",
      secondary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
