import ThemeButton from "@/features/home/theme-button";
import { IconDownload } from "@tabler/icons-react";
import { BorderButton } from "../ui/border-button";

const Navbar = () => {
  return (
    <div className="m-0 w-full border-0 p-0">
      <div className="interWidth borderVr mx-auto flex w-full items-center justify-between p-4">
        <h1 className="text-4xl font-bold text-primary">H</h1>
        <div className="flex items-center gap-4">
          <div className="">
            <BorderButton>
              <IconDownload className="h-5 w-5 font-bold text-primary group-hover:text-white" />
              <span className="text-md goup-hover:text-white font-semibold text-primary md:text-lg">
                Get My CV
              </span>
            </BorderButton>
          </div>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
