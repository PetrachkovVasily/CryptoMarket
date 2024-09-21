import { cva, VariantProps } from "class-variance-authority";
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";
import cn from "../../utils/cn";

export interface ModalProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  children: ReactNode;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  children,
  className,
  variant,
  size,
  isActive,
  setActive,
  ...props
}: ModalProps) {
  const closeModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setActive(false);
  };
  return (
    <div
      className={
        isActive
          ? "fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black bg-opacity-[40%]"
          : "hidden"
      }
      onClick={(e) => closeModal(e)}
    >
      <div
        className={cn(modalVariants({ variant, size, className }))}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

const modalVariants = cva(
  "flex flex-col justify-center rounded-[5px] bg-white",
  {
    variants: {
      variant: {
        briefcase: "min-w-[390px] w-[50%] max-w-[700px] py-[8px]",
        add: "max-h-[200px] max-w-[350px] flex h-[120px] w-[370px] flex-col items-center gap-[20px]",
      },
      size: {
        neutral: "",
      },
    },
    defaultVariants: {
      variant: "briefcase",
      size: "neutral",
    },
  },
);
