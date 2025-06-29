import { getProfile } from "@/sanity/lib/query";
import { IconCode, IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import SecondaryButton from "../common/secondary-button";

const Navbar = async () => {
  const profile = await getProfile();

  return (
    <div className="z-30 m-0 w-full border-0 p-0">
      <div className="max-container borderVr flex items-center justify-between p-4">
        <Link href="/" className="group flex items-baseline">
          <div className="bg-primary translate-y-1 rounded-lg p-1 text-white transition duration-300 group-hover:translate-y-0.5 group-hover:shadow-sm">
            <IconCode className="h-5 w-5" />
          </div>
          {/* TODO: REPLACE Logo Text >>---------------------------------------- */}
          <h1 className="text-2xl font-medium tracking-[-0.08rem]">
            <span className="text-text-main">hein</span>
            <span className="text-primary">Thant</span>
          </h1>
          {/* ------------------------------------------------------- */}
        </Link>
        {profile?.resumeURL && (
          <div className="flex items-center gap-4">
            <a
              href={`${profile.resumeURL}?dl=${
                profile?.fullName
                  ? profile.fullName.replaceAll(" ", "_")
                  : "AWESOME"
              }_CV.pdf`}
              className=""
            >
              <SecondaryButton className="flex items-center justify-center">
                <IconDownload className="text-primary dark:text-primaryDark h-5 w-5 font-bold group-hover:text-white" />
                <span className="text-md text-primary dark:text-primaryDark ml-4 font-semibold group-hover:text-white md:text-lg">
                  Get My CV
                </span>
              </SecondaryButton>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
