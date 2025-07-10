import { cn } from "@/utils/cn";
import Link from "next/link";

const LinkUnderline = ({
  href,
  label,
  className,
  target = "_self",
}: {
  href: string;
  label: string;
  className?: string;
  target?: "_self" | "_blank";
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      className={cn(
        `group hover:text-primary dark:hover:text-primaryDark relative w-fit transition duration-100 hover:brightness-110`,
        className,
      )}
    >
      {label}
      <span
        className={`ease bg-primary dark:bg-primaryDark absolute bottom-1.5 left-2 inline-block h-[1.5px] w-0 rounded-full transition-[width] duration-300 group-hover:w-[80%]`}
      />
    </Link>
  );
};

export default LinkUnderline;
