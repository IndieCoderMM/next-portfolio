import { navLinks } from "@/config/navLinks";
import { FloatingDock } from "../ui/floating-dock";

const FloatingNav = () => {
  return (
    <div className="fixed bottom-4 z-[99]">
      <FloatingDock items={navLinks} />
    </div>
  );
};

export default FloatingNav;
