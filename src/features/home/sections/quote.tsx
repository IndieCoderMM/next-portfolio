import { SectionContainer } from "@/components/layout/section";
import { IconQuote } from "@tabler/icons-react";
import clsx from "clsx";

const QuoteSection = () => {
  return (
    <SectionContainer className="bg-white py-24 dark:bg-transparent">
      <blockquote
        className={clsx(
          "flex gap-2 pt-2 text-3xl text-slate-500",
          "md:text-4xl lg:pt-0 lg:text-5xl",
          "dark:text-slate-400",
        )}
      >
        <IconQuote className={"-mr-3 -mt-3 h-24 w-24"} />
        <span className={clsx("flex flex-col")}>
          <span className={clsx("leading-[1.15]")}>
            In <em>Coding</em>
          </span>
          <span
            className={clsx(
              "flex items-center gap-2 leading-[1.15]",
              "lg:gap-4",
            )}
          >
            <span
              className={clsx(
                "mt-1 h-0.5 w-8 rounded-full bg-slate-400",
                "lg:h-1 lg:w-24",
                "dark:bg-slate-600",
              )}
            />
            <span>
              <strong
                className={clsx(
                  "font-bold text-slate-600",
                  "dark:text-slate-300",
                )}
              >
                creativity{" "}
              </strong>{" "}
              meets{" "}
              <strong
                className={clsx(
                  "font-bold text-slate-600",
                  "dark:text-slate-300",
                )}
              >
                logic{" "}
              </strong>
            </span>
            <span
              className={clsx(
                "mt-1 h-0.5 w-6 rounded-full bg-slate-400",
                "lg:h-1 lg:w-14",
                "dark:bg-slate-600",
              )}
            />
          </span>
          <span className={clsx("leading-[1.15]")}>
            to solve{" "}
            <strong
              className={clsx(
                "relative font-bold text-slate-600",
                "dark:text-slate-300",
              )}
            >
              <span
                className={clsx(
                  "absolute -left-0.5 bottom-0 right-0 top-1 z-0 rounded-md bg-slate-100 px-1",
                  "lg:-left-1.5 lg:-right-0.5 lg:bottom-0 lg:top-2",
                  "dark:bg-slate-800",
                )}
              />
              <span className="relative">real-world problems</span>
            </strong>
          </span>
        </span>
      </blockquote>
    </SectionContainer>
  );
};

export default QuoteSection;
