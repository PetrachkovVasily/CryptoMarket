import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface DivProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  children: ReactNode;
}

function TextHeader({ children, className, variant }: DivProps) {
  return (
    <div className={cn(divVariants({ variant, className }))}>{children}</div>
  );
}

export default TextHeader;

const divVariants = cva("font-bold", {
  variants: {
    variant: {
      primary: "",
      secondary: "w-[90px] overflow-hidden",
      tertiary: "text-[#A6B0C3]",
      fourth: "text-[14px] font-semibold",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
