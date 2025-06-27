import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

export const SectionContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("w-full py-16 sm:py-20", className)}>
      <div className="max-container flex flex-col items-center">{children}</div>
    </section>
  );
};

export const SectionContent = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={cn("mt-20 border-t border-light", "dark:border-divider-dark")}
    >
      <div className={cn("max-container pb-20")}>{children}</div>
    </div>
  );
};

interface SectionButtonProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function SectionButton({
  title,
  description = "",
  icon = null,
  active = false,
  onClick = () => {},
}: SectionButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left",
        "dark:bg-dark",
        active
          ? ["border-primary", "dark:border-primaryDark"]
          : ["border-neutral-300", "dark:border-neutral-700"],
      )}
      onClick={onClick}
    >
      {icon && (
        <span
          className={cn(
            "hidden w-24 shrink-0 justify-center text-center text-7xl font-black",
            "xl:flex",
            active
              ? ["text-primary", "dark:text-primaryDark"]
              : ["text-neutral-400", "dark:text-neutral-600"],
          )}
        >
          {icon}
        </span>
      )}
      <span className={cn("flex-1")}>
        <span
          className={cn(
            "block font-bold",
            active
              ? ["text-accent-600", "dark:text-accent-400"]
              : ["text-slate-700", "dark:text-slate-200"],
          )}
        >
          {title}
        </span>
        {description && (
          <span
            className={cn(
              "mt-1 block text-sm text-slate-600",
              "dark:text-slate-400",
            )}
          >
            {description}
          </span>
        )}
      </span>
    </button>
  );
}

export function SectionButtonSmall({
  title,
  icon = null,
  active = false,
  onClick = () => {},
}: Omit<SectionButtonProps, "description">) {
  return (
    <button
      type="button"
      className={cn("flex flex-col items-center rounded-xl p-2 text-sm", [
        active
          ? ["text-accent-600", "dark:text-accent-400"]
          : ["text-slate-400", "dark:text-slate-600"],
      ])}
      onClick={onClick}
    >
      <span className={cn("text-4xl font-black")}>{icon}</span>
      <span
        className={cn(
          "font-medium",
          active
            ? ["text-accent-600", "dark:text-accent-400"]
            : ["text-slate-500", "dark:text-slate-400"],
        )}
      >
        {title}
      </span>
    </button>
  );
}
