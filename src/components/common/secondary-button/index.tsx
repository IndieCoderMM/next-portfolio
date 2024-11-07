import { PropsWithChildren } from "react";
import styles from "./style.module.css";

const SecondaryButton = ({
  children,
  onClick,
  type = "button",
}: PropsWithChildren<{
  onClick?: () => void;
  type?: "button" | "submit";
}>) => {
  return (
    <button className={styles.button + " group"} type={type} onClick={onClick}>
      <div>{children}</div>
    </button>
  );
};

export default SecondaryButton;
