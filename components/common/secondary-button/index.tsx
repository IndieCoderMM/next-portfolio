import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

const SecondaryButton = ({
  children,
  onClick,
  className,
  type = "button",
}: PropsWithChildren<{
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}>) => {
  return (
    <button
      className="group border-primary/50 hover:bg-primary dark:border-primaryDark dark:hover:bg-primaryDark flex min-h-12 w-full cursor-pointer items-center justify-center rounded-xl border bg-transparent px-4 py-1 transition duration-300 select-none hover:-translate-y-1 hover:text-white hover:shadow-[rgba(0,0,0,0.24)_0_2px_10px] active:translate-y-0"
      type={type}
      onClick={onClick}
    >
      <div className={cn(className)}>{children}</div>
    </button>
  );
};

export default SecondaryButton;
