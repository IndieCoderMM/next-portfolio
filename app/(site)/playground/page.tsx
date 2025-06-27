import NotForMobile from "@/components/common/not-for-mobile";
import PlaygroundSection from "@/features/playground/components/playground-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground — Hein Thant · Full-Stack Developer",
  description:
    "Fun projects, games, algorithms, and some random things I've built.",
};

const PlaygroundPage = () => {
  return (
    <div className="relative w-full">
      <PlaygroundSection />
      <NotForMobile />
    </div>
  );
};

export default PlaygroundPage;
