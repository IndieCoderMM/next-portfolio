import { services } from "@/config/services";
import { techs } from "@/config/technology";
import HeroSection from "@/features/home/sections/hero";
import Metrics from "@/features/home/sections/metrics";
import ProjectSection from "@/features/home/sections/projects";
import QuoteSection from "@/features/home/sections/quote";
import ServiceSection from "@/features/home/sections/service";
import TechnologySection from "@/features/home/sections/technology";
import { getProducts, getProfile } from "@/sanity/lib/query";

const HomePage = async () => {
  const profile = await getProfile();
  const products = await getProducts();

  console.log(JSON.stringify(profile, null, 2));

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <HeroSection profile={profile} />
      <TechnologySection techs={techs} />
      <ServiceSection services={services} />
      <ProjectSection products={products} />
      <QuoteSection />
      <Metrics metrics={profile?.metrics} />
    </div>
  );
};

export default HomePage;
