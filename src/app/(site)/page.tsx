import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import GridBackground from "@/components/ui/grid-background";
import { navLinks } from "@/config/navLinks";
import { services } from "@/config/services";
import HeroSection from "@/features/home/sections/hero";
import Metrics from "@/features/home/sections/metrics";
import { ServiceSection } from "@/features/home/sections/service";
import TechnologySection from "@/features/home/sections/technology";
import { getProfile } from "@/utils/data";

const HomePage = () => {
  const profile = getProfile();

  return (
    <main className="relative flex w-full flex-col items-center justify-center">
      <Navbar />
      <HeroSection profile={profile} />
      <TechnologySection />
      <ServiceSection services={services} />
      <Metrics />
      <Footer />
      <div className="fixed bottom-4">
        <FloatingDock items={navLinks} />
      </div>
      <GridBackground />
    </main>
  );
};

export default HomePage;
