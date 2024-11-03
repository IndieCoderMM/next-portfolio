import { FloatingDock } from "@/components/ui/floating-dock";
import GridBackground from "@/components/ui/grid-background";
import { navLinks } from "@/config/navLinks";
import HeroSection from "@/features/home/hero";
import ThemeButton from "@/features/home/theme-button";

const profile = {
  bio: "Hi, I'm Hein Thant. Nice to see you here!",
  description:
    "I'm a software engineer, a tech enthusiast, and a lifelong learner.",
  resumeURL:
    "https://drive.google.com/file/d/1JYkQ9WvZ2gR2zV7u5Q5V1Z1U4U3vZv0T/view?usp=sharing",
  fullName: "Hein Thant",
};

const HomePage = () => {
  return (
    <main className="w-full flex items-center justify-center flex-col">
      <GridBackground>
        <nav>
          <ThemeButton />
        </nav>
        <HeroSection profile={profile} />
      </GridBackground>

      <div className="fixed bottom-8">
        <FloatingDock items={navLinks} />
      </div>
    </main>
  );
};

export default HomePage;
