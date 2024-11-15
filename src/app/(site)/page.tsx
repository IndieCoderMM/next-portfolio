import Footer from "@/components/layout/footer";
import { services } from "@/config/services";
import { techs } from "@/config/technology";
import HeroSection from "@/features/home/sections/hero";
import Metrics from "@/features/home/sections/metrics";
import QuoteSection from "@/features/home/sections/quote";
import ServiceSection from "@/features/home/sections/service";
import TechnologySection from "@/features/home/sections/technology";
import { getProfile } from "@/utils/data";

const HomePage = () => {
  const profile = getProfile();

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <HeroSection profile={profile} />
      <TechnologySection techs={techs} />
      <QuoteSection />
      <ServiceSection
        services={services}
        heading={"Bring your ideas to reality"}
      />
      <Metrics />
      <Footer />
    </div>
  );
};

export default HomePage;
