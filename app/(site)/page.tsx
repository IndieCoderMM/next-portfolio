import HeroSection from "@/features/home/sections/hero";
import Metrics from "@/features/home/sections/metrics";
import ProjectSection from "@/features/home/sections/projects";
import ServiceSection from "@/features/home/sections/service";
import TechnologySection from "@/features/home/sections/technology";
import {
  getProfile,
  getProjects,
  getServices,
  getTech,
} from "@/sanity/lib/query";

export const revalidate = 60;

const HomePage = async () => {
  const profile = await getProfile();
  const projects = await getProjects();
  const services = await getServices();
  const techs = await getTech();

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <HeroSection profile={profile} />
      <TechnologySection techs={techs} />
      <ServiceSection services={services} />
      <ProjectSection projects={projects} />
      <Metrics metrics={profile?.metrics} />
    </div>
  );
};

export default HomePage;
