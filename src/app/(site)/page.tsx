import Footer from "@/components/layout/footer";
import { services } from "@/config/services";
import HeroSection from "@/features/home/sections/hero";
import Metrics from "@/features/home/sections/metrics";
import { ServiceSection } from "@/features/home/sections/service";
import TechnologySection from "@/features/home/sections/technology";
import { getProfile } from "@/utils/data";

const HomePage = () => {
  const profile = getProfile();

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <HeroSection profile={profile} />
      <TechnologySection />
      <ServiceSection services={services} />
      <Metrics />
      <Footer />
    </div>
  );
};

export default HomePage;
