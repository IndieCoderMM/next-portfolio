import { cn } from "@/utils/cn";
import { fadeIn } from "@/utils/motion";
import { motion } from "motion/react";

type FieldProps = {
  name: string;
  value: string;
  placeholder: string;
  handleChange: (name: string, value: string) => void;
  icon: React.FC;
};

const Field = ({
  name,
  value,
  placeholder,
  handleChange,
  icon: Icon,
}: FieldProps) => {
  return (
    <div className="border-dark dark:border-light w-full overflow-hidden border-b py-2 text-lg md:text-xl">
      <label className="sr-only">{name}</label>
      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "spring",
          delay: 0,
          duration: 0.3,
        })}
        initial="hidden"
        animate="show"
        className="flex w-full items-center gap-3"
      >
        <div className="text-primary dark:text-light flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-gray-100 p-1 dark:bg-[#333]">
          <Icon />
        </div>
        <input
          name={name}
          type={name === "email" ? "email" : "text"}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          autoFocus
        />
        {/* Enter button icon */}
        <div
          className={cn(
            "dark:bg-dark flex items-center gap-2 rounded-md border border-neutral-300 bg-white p-1 opacity-100 transition-[opacity] duration-200",
            {
              "opacity-0": value.length === 0,
            },
          )}
        >
          <span>&crarr;</span>

          <span className="pr-2 text-xs">Enter</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Field;
