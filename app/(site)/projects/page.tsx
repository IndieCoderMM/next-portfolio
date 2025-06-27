import ContactCTA from "@/features/projects/sections/contact-cta";
import GallerySection from "@/features/projects/sections/gallery";
import PlaygroundCTA from "@/features/projects/sections/playground-cta";
import ProjectRepos from "@/features/projects/sections/repos";
import { getProducts } from "@/sanity/lib/query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Hein Thant · Full-Stack Developer",
  description:
    "Showcase of apps and ideas I've brought to life. From games to web apps, and everything in between.",
};

const ProjectPage = async () => {
  const products = await getProducts();

  return (
    <div className="relative w-full">
      <GallerySection />
      <PlaygroundCTA />
      <ProjectRepos products={products} />
      <ContactCTA />
    </div>
  );
};

// <SkillSection skillGroups={skillGroups} />
export default ProjectPage;
