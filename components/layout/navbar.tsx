import { navbarContent } from "@/config/content/navbar";
import { getProfile } from "@/sanity/lib/query";
import Link from "next/link";
import DownloadButton from "../common/download-button";

const Navbar = async () => {
  const profile = await getProfile();

  return (
    <div className="z-30 w-full bg-transparent p-1">
      <div className="relative flex w-full items-center justify-between p-1 sm:p-4">
        <Link href="/" className="group flex items-center">
          {navbarContent.logo}
        </Link>
        {profile?.resumeURL && (
          <div className="absolute right-0 flex items-center gap-4 sm:w-[200px]">
            <a
              href={`${profile.resumeURL}?dl=${
                profile?.name ? profile.name.replaceAll(" ", "_") : "AWESOME"
              }_CV.pdf`}
              className=""
            >
              <DownloadButton text={navbarContent.cta.text} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
