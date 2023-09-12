import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUpIcon } from "@/components/Icons";

const FilterDropdown = ({ tags, selected, setTagFilters, clearFilters }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // close dropdown when clicked outside
    const closeDropdown = (e) => {
      if (!e.target.closest("#filter-dropdown")) {
        setExpanded(false);
      }
    };
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="relative w-full max-w-[200px]" id="filter-dropdown">
      {selected.length > 0 && (
        <span className="absolute right-0 top-0 flex h-7 w-7 -translate-y-1/3 translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs text-white dark:bg-primaryDark dark:text-black">
          {selected.length}
        </span>
      )}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium shadow-sm hover:border-gray-500 sm:text-base"
      >
        Filter By Tags
        <div
          className={`ml-2 h-5 w-5 transition-all ${
            expanded ? "rotate-0" : "rotate-180"
          }`}
        >
          <ChevronUpIcon />
        </div>
      </button>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            height: 0,
          },
          show: {
            opacity: 1,
            height: "auto",
            transition: {
              duration: 0.25,
            },
          },
        }}
        initial="hidden"
        animate={expanded ? "show" : "hidden"}
        className={`absolute left-0 top-full z-[99] w-full translate-y-1 overflow-hidden rounded-md border border-gray-200 bg-light px-2 py-4 shadow-md backdrop-blur-md dark:bg-dark/80`}
      >
        <ul className="flex max-h-52 flex-wrap items-center  gap-2 overflow-y-auto">
          {selected.length > 0 && (
            <li>
              <button
                type="button"
                onClick={() => clearFilters()}
                className="flex w-full items-center justify-center rounded-md border border-gray-200 px-2 py-1 font-medium text-primary-800 hover:text-pink-700 dark:border-gray-500 dark:text-light dark:hover:text-pink-400"
              >
                Clear <span className="ml-1 text-xl">&times;</span>
              </button>
            </li>
          )}
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`rounded-full px-2 py-1 text-sm transition-all hover:brightness-110 ${
                selected.includes(tag)
                  ? "bg-primary text-white dark:bg-primaryDark dark:text-dark"
                  : "bg-gray-300 text-dark dark:bg-gray-700 dark:text-light"
              }`}
            >
              <button
                type="button"
                onClick={() => setTagFilters(tag)}
                className=""
              >
                #{tag}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default FilterDropdown;
