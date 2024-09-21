import { HTMLAttributes, ReactNode } from "react";

import { cva, VariantProps } from "class-variance-authority";

import cn from "../../utils/cn";

interface DivProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  children: ReactNode;
}

function TextHeader({
  children,
  className,
  variant,
  colorT,
  ...props
}: DivProps) {
  return (
    <div className={cn(divVariants({ variant, colorT, className }))} {...props}>
      {children}
    </div>
  );
}

export default TextHeader;

const divVariants = cva("font-bold", {
  variants: {
    variant: {
      primary: "",
      secondary: "w-[90px] overflow-hidden",
      tertiary: "text-[#aaaaaa]",
      fourth: "text-[14px] font-semibold",
    },
    colorT: {
      default: "",
      green: "text-[#19d959]",
      red: "text-[#dd3d3d]",
    },
  },
  defaultVariants: {
    variant: "primary",
    colorT: "default",
  },
});
