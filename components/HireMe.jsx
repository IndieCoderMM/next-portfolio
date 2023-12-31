import Link from "next/link";

import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="absolute right-0 top-0 z-50 flex items-center justify-center overflow-hidden lg:fixed lg:bottom-4 lg:left-4 lg:right-auto lg:top-auto">
      <div className="relative flex h-auto w-24 items-center justify-center lg:w-36 xl:w-44">
        <CircularText
          className={"animate-spin-slow fill-dark dark:fill-light"}
        />
        <Link
          href="/contact"
          className="ease absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark  p-2 text-center text-sm font-semibold leading-3 text-light shadow-md transition-all duration-300 hover:scale-105 hover:ring hover:ring-accent hover:brightness-110 dark:bg-light dark:text-dark lg:h-20 lg:w-20  xl:h-24 xl:w-24 xl:text-xl"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
