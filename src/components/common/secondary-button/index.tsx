import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";
import styles from "./style.module.css";

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
    <button className={styles.button + " group"} type={type} onClick={onClick}>
      <div className={cn(className)}>{children}</div>
    </button>
  );
};

export default SecondaryButton;
