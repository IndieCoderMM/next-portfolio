import { metaTexts } from "@/config/metadata";
import ContactCTA from "@/features/projects/sections/contact-cta";
import GallerySection from "@/features/projects/sections/gallery";
import PlaygroundCTA from "@/features/projects/sections/playground-cta";
import ProjectRepos from "@/features/projects/sections/repos";
import { getProjects } from "@/sanity/lib/query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTexts.projects.title,
  description: metaTexts.projects.description,
};

const ProjectPage = async () => {
  const products = await getProjects();

  return (
    <div className="relative w-full">
      <GallerySection />
      <PlaygroundCTA />
      <ProjectRepos products={products} />
      <ContactCTA />
    </div>
  );
};

export const revalidate = 60;

export default ProjectPage;
