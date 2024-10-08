import { ReactNode, TdHTMLAttributes } from "react";

import { cva, VariantProps } from "class-variance-authority";

import cn from "../../utils/cn";

export interface DivProps
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
      primary: "flex h-[64px] w-[56px] items-center justify-center",
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
