import { VariantProps, cva } from "class-variance-authority";
import { ReactNode, TdHTMLAttributes } from "react";
import cn from "../../utils/cn";

interface DivProps
  extends TdHTMLAttributes<HTMLElement>,
    VariantProps<typeof tdVariants> {
  children: ReactNode;
}

function TableD({ children, className, variant }: DivProps) {
  return <td className={cn(tdVariants({ variant, className }))}>{children}</td>;
}

export default TableD;

const tdVariants = cva("", {
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
