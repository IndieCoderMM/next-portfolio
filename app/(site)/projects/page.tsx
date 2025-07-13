import { metaTexts } from "@/config/metadata";
import ContactCTA from "@/features/projects/sections/contact-cta";
import GallerySection from "@/features/projects/sections/gallery";
import ProjectRepos from "@/features/projects/sections/repos";
import { getProjects } from "@/sanity/lib/query";
import { getMetadata } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: metaTexts.projects.title,
  description: metaTexts.projects.description,
});

const ProjectPage = async () => {
  const projects = await getProjects();

  return (
    <div className="relative w-full">
      <GallerySection />
      <ProjectRepos projects={projects} />
      <ContactCTA />
    </div>
  );
};

export const revalidate = 60;

export default ProjectPage;
