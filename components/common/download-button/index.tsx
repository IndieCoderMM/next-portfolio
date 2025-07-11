import { cn } from "@/utils/cn";
import { IconDownload } from "@tabler/icons-react";

const DownloadButton = ({
  text = "Download",
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className="group border-fg/50 text-secondary-fg text-md relative cursor-pointer rounded-2xl px-2 text-center font-medium sm:h-[46px] sm:w-[180px] sm:border"
      type="button"
    >
      <div className="bg-primary absolute top-[3px] left-[3px] z-10 hidden h-[38px] w-1/4 items-center justify-center rounded-xl duration-500 group-hover:w-[172px] sm:flex">
        <IconDownload className="text-bg h-6 w-6 transform group-hover:scale-110" />
      </div>
      <p
        className={cn(
          className,
          "underline sm:ml-5 sm:translate-x-2 sm:no-underline",
        )}
      >
        {text}
      </p>
    </button>
  );
};

export default DownloadButton;
