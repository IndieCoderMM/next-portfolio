import { IconCode, IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import SecondaryButton from "../common/secondary-button";

const Navbar = () => {
  return (
    <div className="z-30 m-0 w-full border-0 p-0">
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
            <SecondaryButton className="flex items-center justify-center">
              <IconDownload className="h-5 w-5 font-bold text-primary group-hover:text-white" />
              <span className="text-md ml-4 font-semibold text-primary group-hover:text-white md:text-lg">
                Get My CV
              </span>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
