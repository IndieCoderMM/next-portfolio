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
      className="group flex min-h-12 w-full select-none items-center justify-center rounded-2xl border-2 border-primary bg-transparent px-4 py-1 transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-[rgba(0,0,0,0.24)_0_2px_10px] active:translate-y-0 dark:border-primaryDark dark:hover:bg-primaryDark"
      type={type}
      onClick={onClick}
    >
      <div className={cn(className)}>{children}</div>
    </button>
  );
};

export default SecondaryButton;
