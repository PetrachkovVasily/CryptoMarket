import { VariantProps, cva } from "class-variance-authority";
import { ReactNode, ThHTMLAttributes } from "react";
import cn from "../../utils/cn";

interface DivProps
  extends ThHTMLAttributes<HTMLElement>,
    VariantProps<typeof thVariants> {
  children: ReactNode;
}

function TableH({ children, className, variant }: DivProps) {
  return <th className={cn(thVariants({ variant, className }))}>{children}</th>;
}

export default TableH;

const thVariants = cva("", {
  variants: {
    variant: {
      primary: "w-[56px]",
      secondary: "w-[30px]",
      tertiary: "ml-[4px] w-[75px]",
      fourth: "ml-[4px] w-[54px]",
      fifth: "w-[42px]",
      sixth: "ml-[12px] w-[75px]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
