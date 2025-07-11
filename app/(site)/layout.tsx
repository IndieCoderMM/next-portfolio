import FloatingNav from "@/components/layout/floating-nav";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/star-background";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex w-full flex-col items-center justify-center">
      <div className="fixed inset-0">
        <StarsBackground />
        <ShootingStars />
      </div>
      <Navbar />
      {children}
      <FloatingNav />
      <Footer />
    </main>
  );
};

export default MainLayout;
