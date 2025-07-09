import { PropsWithChildren } from "react";
import styles from "./style.module.css";

const PrimaryButton = ({
  children,
  onClick,
  type = "button",
}: PropsWithChildren<{
  onClick?: () => void;
  type?: "button" | "submit";
}>) => {
  return (
    <button className={`${styles.button}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
