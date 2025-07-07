import NotForMobile from "@/components/common/not-for-mobile";
import { metaTexts } from "@/config/metadata";
import PlaygroundSection from "@/features/playground/components/playground-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTexts.playground.title,
  description: metaTexts.playground.description,
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
