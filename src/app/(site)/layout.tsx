import FloatingNav from "@/components/layout/floating-nav";
import Navbar from "@/components/layout/navbar";
import GridBackground from "@/components/ui/grid-background";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex w-full flex-col items-center justify-center">
      <Navbar />
      {children}
      <GridBackground />
      <FloatingNav />
    </main>
  );
};

export default MainLayout;
