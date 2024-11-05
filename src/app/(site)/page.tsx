import Navbar from "@/components/layout/navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import GridBackground from "@/components/ui/grid-background";
import { navLinks } from "@/config/navLinks";
import HeroSection from "@/features/home/hero";

const profile = {
  bio: "I'm transforming concepts into seamless experiences.",
  description:
    "I'm a software engineer, a tech enthusiast, and a lifelong learner.",
  resumeURL:
    "https://drive.google.com/file/d/1JYkQ9WvZ2gR2zV7u5Q5V1Z1U4U3vZv0T/view?usp=sharing",
  fullName: "Johnathan William Snow",
};

const HomePage = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Navbar />
      <HeroSection profile={profile} />

      <div className="fixed bottom-4">
        <FloatingDock items={navLinks} />
      </div>
      <GridBackground />
    </main>
  );
};

export default HomePage;
