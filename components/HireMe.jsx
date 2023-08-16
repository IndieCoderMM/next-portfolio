import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-auto w-48 items-center justify-center">
        <CircularText
          className={"animate-spin-slow fill-dark dark:fill-light"}
        />
        <Link
          href="/contact"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark font-semibold text-light shadow-md transition-colors hover:bg-primary hover:text-white dark:bg-light dark:text-dark dark:hover:bg-primary dark:hover:text-white"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
