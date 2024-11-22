import { IconArrowRight } from "@tabler/icons-react";
import styles from "./style.module.css";

const AnimatedLink = ({
  href,
  label,
}: {
  href: string;
  label: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className={
        styles.borderAnimate +
        " group/link relative flex w-full max-w-[250px] flex-1 items-center justify-center overflow-hidden px-4 py-2 text-lg font-medium tracking-wide underline transition-all duration-300 hover:tracking-tight hover:text-primary-800 hover:no-underline active:bg-primary active:text-white dark:hover:text-primaryDark dark:active:bg-primaryDark dark:active:text-dark md:px-8 md:py-4 md:text-2xl"
      }
    >
      <svg>
        <rect
          x="0"
          y="0"
          fill="none"
          width="100%"
          height="100%"
          className="stroke-primary-800 dark:stroke-primaryDark"
        />
      </svg>
      {label}
      <IconArrowRight className="group/link-hover:translate-x-[90px] group/link-hover:opacity-100 h-4 w-4 -translate-x-full opacity-0 transition-all duration-300 ease-in-out md:text-sm" />
    </a>
  );
};

export default AnimatedLink;
