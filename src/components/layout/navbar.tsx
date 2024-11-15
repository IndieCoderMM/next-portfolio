import { IconCode, IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import ShimmerButton from "../ui/shimmer-button";

const Navbar = () => {
  return (
    <div className="absolute left-0 right-0 top-0 z-30 m-0 w-full border-0 p-0">
      <div className="max-container borderVr flex items-center justify-between p-4">
        <Link href="/" className="group flex items-baseline">
          <div className="translate-y-1 rounded-lg bg-primary p-1 text-white transition duration-300 group-hover:translate-y-0.5 group-hover:shadow-sm">
            <IconCode className="h-5 w-5" />
          </div>
          <h1 className="font-nunito text-2xl font-bold tracking-[-0.08rem]">
            <span className="text-dark">hein</span>
            <span className="text-primary">Thant</span>
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="">
            <ShimmerButton>
              <IconDownload className="h-5 w-5 font-bold text-white" />
              <span className="text-md ml-4 font-semibold text-white md:text-lg">
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
