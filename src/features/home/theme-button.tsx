"use client";

import { MoonIcon, SunIcon } from "@/components/common/icons";
import useTheme from "@/hooks/useTheme";

const ThemeButton = () => {
  const [mode, setMode] = useTheme();
  return (
    <button
      onClick={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
      type="button"
      aria-label="Toggle Theme"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-light p-1 dark:bg-dark"
    >
      {mode === "dark" ? (
        <SunIcon className={"text-yellow-500"} />
      ) : (
        <MoonIcon className={"text-yellow-500"} />
      )}
    </button>
  );
};

export default ThemeButton;
