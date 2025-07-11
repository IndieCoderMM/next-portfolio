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
      className="group border-fg/50 text-secondary-fg text-md relative h-[46px] w-[180px] cursor-pointer rounded-2xl border text-center font-medium"
      type="button"
    >
      <div className="bg-primary absolute top-[3px] left-[3px] z-10 flex h-[38px] w-1/4 items-center justify-center rounded-xl duration-500 group-hover:w-[172px]">
        <IconDownload className="h-6 w-6 transform text-white group-hover:scale-110" />
      </div>
      <p className={cn(className, "ml-5 translate-x-2")}>{text}</p>
    </button>
  );
};

export default DownloadButton;
