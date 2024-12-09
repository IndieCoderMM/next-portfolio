import GitHubCard from "@/components/common/github-card";
import Heading from "@/components/common/heading";
import features from "@/config/features";
import { ProductsQueryResult } from "@/sanity.types";
import {
  IconBrandAppstore,
  IconBrandGooglePlay,
  IconBrandOpenai,
  IconChartBar,
  IconDeviceMobile,
  IconNote,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button, Chip } from "../components/project-tabs";

const ProjectRepos = ({ products }: { products: ProductsQueryResult }) => {
  return (
    <section className="inner-container">
      <MobileFeaturedProjects />
      <div className="inner-container mb-16 mt-16">
        <Heading as="h3" className="mb-4">
          I also Built These Just Because
        </Heading>
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          Some are just for learning, others are for the fun. Either way, these
          projects kept me going.
        </p>
      </div>
      <div className="lg:my-18 my-10 grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
        {products.map((product) => (
          <GitHubCard key={product.id} project={product} />
        ))}
      </div>
    </section>
  );
};

export default ProjectRepos;

const MobileFeaturedProjects = () => {
  return (
    <div className="w-full sm:hidden">
      <Heading as="h2">Big Ideas into Impactful Products</Heading>
      <div className="group">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/screenshots/e2s.webp"
            alt="dummy image"
            width="600"
            height="1200"
            className="object-cover object-left-top"
          />
        </div>
        <div className="bg-white py-4 dark:bg-dark">
          <h3 className="mb-2 text-3xl font-semibold text-primary">
            Easy2Success
          </h3>
          <p className="mb-4 text-3xl leading-tight text-black dark:text-white">
            AI-Powered Personal Development & E-Learning App{" "}
            <span className="text-neutral-700 dark:text-neutral-200">
              empowering users to achieve their goals
            </span>
          </p>
          <div className="mb-8 flex items-center gap-4">
            <Chip text="AI" icon={IconBrandOpenai} color="green" />
            <Chip text="Mobile" icon={IconDeviceMobile} color="blue" />
            <Chip text="Productivity" icon={IconChartBar} color="red" />
          </div>
          <div className="flex">
            <div className="mt-auto flex w-full justify-center gap-4 sm:flex-col">
              <Button
                icon={<IconBrandGooglePlay className="h-8 w-8" />}
                subtitle="Get it on"
                title={"Google Play"}
              />
              <Button
                icon={<IconBrandAppstore className="h-8 w-8" />}
                subtitle="Download on the"
                title={"App Store"}
              />
            </div>
            {features.PROJECT_DETAIL && (
              <div className="ml-4 flex items-center self-end">
                <a
                  href="/projects/0"
                  className="flex items-center p-2 text-lg text-primary opacity-0 transition duration-500 hover:underline group-hover:opacity-100 lg:text-xl"
                >
                  <IconNote className="text-primary" />
                  Learn More
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
