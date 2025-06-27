import Heading from "@/components/common/heading";
import CtaLayout from "@/components/layout/cta-layout";
import { IconBuildingCastle } from "@tabler/icons-react";
import Link from "next/link";

const PlaygroundCTA = () => {
  return (
    <CtaLayout className="mb-20 hidden md:flex">
      <Heading as="h3" className="text-xl md:text-3xl lg:text-5xl">
        Want to see fun projects?
      </Heading>
      <p className="md:text-xl lg:text-2xl">
        Games, algorithms, and some random things I've built.
      </p>
      <Link href="/playground" className="outline-button mt-8 rounded-full">
        <IconBuildingCastle />
        <span>Enter Playground</span>
      </Link>
    </CtaLayout>
  );
};

export default PlaygroundCTA;
