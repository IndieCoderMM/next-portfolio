import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

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
    <div className="w-full overflow-hidden border-b border-dark py-2 text-lg dark:border-light md:text-xl">
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
        <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-gray-100 p-1 text-primary dark:bg-[#333] dark:text-light">
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
      </motion.div>
    </div>
  );
};

export default Field;
