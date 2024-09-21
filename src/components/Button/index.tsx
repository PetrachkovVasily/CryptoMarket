import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: any;
}

function Button({ children, className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
}

export default Button;

const buttonVariants = cva(
  "rounded-[5px] border-[1px] border-gray-400 cursor-pointer hover:bg-[#EFF2F5]",
  {
    variants: {
      variant: {
        primary: "p-[12px]",
        secondary: "w-[102px] h-[42px]",
        tertiary: "border-none w-[100%] h-[40px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
