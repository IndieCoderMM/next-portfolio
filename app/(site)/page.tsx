import HeroSection from "@/features/home/sections/hero";
import Metrics from "@/features/home/sections/metrics";
import ProjectSection from "@/features/home/sections/projects";
import ServiceSection from "@/features/home/sections/service";
import TechnologySection from "@/features/home/sections/technology";
import { getProducts, getProfile } from "@/sanity/lib/query";

export const revalidate = 60;

const HomePage = async () => {
  const profile = await getProfile();
  const products = await getProducts();

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <HeroSection profile={profile} />
      <TechnologySection />
      <ServiceSection />
      <ProjectSection products={products} />
      <Metrics metrics={profile?.metrics} />
    </div>
  );
};

export default HomePage;
