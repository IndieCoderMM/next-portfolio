import { getProfile } from "@/sanity/sanity.query";

import HireMe from "@/components/HireMe";
import Navbar from "@/components/Navbar";

export const revalidate = 60 * 60 * 24; // 24 hours

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
