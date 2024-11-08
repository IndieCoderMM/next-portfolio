import { IconDownload } from "@tabler/icons-react";
import ShimmerButton from "../ui/shimmer-button";

const Navbar = () => {
  return (
    <div className="m-0 w-full border-0 p-0">
      <div className="interWidth borderVr mx-auto flex w-full items-center justify-between p-4">
        <h1 className="text-4xl font-bold text-primary">H</h1>
        <div className="flex items-center gap-4">
          <div className="">
            <ShimmerButton>
              <IconDownload className="h-5 w-5 font-bold text-white" />
              <span className="text-md ml-4 font-semibold text-primary text-white md:text-lg">
                Get My CV
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
