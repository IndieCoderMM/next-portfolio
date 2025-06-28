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
    <button className={`${styles.primaryBtn}`} type={type} onClick={onClick}>
      <span />
      <span className="bg-gr-primary dark:bg-gr-primary-dark" />
      <div className="bg-primary">{children}</div>
    </button>
  );
};

export default PrimaryButton;
