import { getProfile } from "@/sanity/sanity.query";

import HireMe from "@/components/HireMe";
import Navbar from "@/components/Navbar";
import FixedNavbar from "@/components/FixedNavbar";

const PageLayout = async ({ children }) => {
  const { socials } = await getProfile();
  return (
    <>
      <Navbar socials={socials} />
      {children}
      <HireMe />
    </>
  );
};

export default PageLayout;
