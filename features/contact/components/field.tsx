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
    <div className="border-light w-full overflow-hidden border-b py-2 text-lg md:text-xl">
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
        <div className="text-light flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-[#333] p-1">
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
            "bg-dark flex items-center gap-1 rounded-md border border-neutral-300 p-1 px-2 opacity-100 transition-[opacity] duration-200",
            {
              "opacity-0": value.length === 0,
            },
          )}
        >
          <span>&crarr;</span>

          <span className="text-xs">Enter</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Field;
