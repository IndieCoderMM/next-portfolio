import { cn } from "@/utils/cn";
import Link from "next/link";

const LinkUnderline = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        `group relative w-fit transition duration-100 hover:text-primary hover:brightness-110 dark:hover:text-primaryDark`,
        className,
      )}
    >
      {label}
      <span
        className={`ease absolute bottom-0.5 left-1 inline-block h-[1.5px] w-0 rounded-full bg-primary transition-[width] duration-300 group-hover:w-full dark:bg-primaryDark`}
      />
    </Link>
  );
};

export default LinkUnderline;
