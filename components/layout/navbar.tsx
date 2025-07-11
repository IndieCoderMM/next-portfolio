import { getProfile } from "@/sanity/lib/query";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";
import DownloadButton from "../common/download-button";

const Navbar = async () => {
  const profile = await getProfile();

  return (
    <div className="z-30 w-full bg-white dark:bg-transparent">
      <div className="relative flex w-full items-center justify-between p-4">
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
          <div className="absolute right-0 flex w-[200px] items-center gap-4">
            <a
              href={`${profile.resumeURL}?dl=${
                profile?.name ? profile.name.replaceAll(" ", "_") : "AWESOME"
              }_CV.pdf`}
              className=""
            >
              <DownloadButton text={"Get My CV"} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
