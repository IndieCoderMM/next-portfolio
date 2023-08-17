import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed right-0 top-0 flex items-center justify-center overflow-hidden lg:bottom-4 lg:left-4 lg:right-auto lg:top-auto">
      <div className="relative flex h-auto w-24 items-center justify-center lg:w-48">
        <CircularText
          className={"animate-spin-slow fill-dark dark:fill-light"}
        />
        <Link
          href="/contact"
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark text-center text-sm font-semibold leading-3 text-light shadow-md transition-colors hover:bg-primary hover:text-white dark:bg-light dark:text-dark dark:hover:bg-primary dark:hover:text-white lg:h-20 lg:w-20"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
