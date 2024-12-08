import { navLinks } from "@/config/navLinks";
import { FloatingDock } from "../ui/floating-dock";

const FloatingNav = () => {
  return (
    <div className="fixed bottom-4 z-[99] w-full sm:w-auto">
      <FloatingDock
        items={navLinks}
        mobileClassName="absolute bottom-4 right-4"
      />
    </div>
  );
};

export default FloatingNav;
