import GallerySection from "@/features/projects/sections/gallery";
import ProjectGrid from "@/features/projects/sections/grid";
import ProjectRepos from "@/features/projects/sections/repos";
import { getProducts } from "@/sanity/lib/query";

const skillGroups: SkillGroup[] = [
  {
    id: "1",
    title: "Frontend",
    imageURL: "/assets/images/projects/frontend.svg",
    list: [
      {
        name: "React",
        logoURL: "/assets/images/skills/react.svg",
      },
      {
        name: "Next.js",
        logoURL: "/assets/images/skills/nextjs.svg",
      },
      {
        name: "Redux",
        logoURL: "/assets/images/skills/redux.svg",
      },
    ],
  },
];

const ProjectPage = async () => {
  const products = await getProducts();

  return (
    <div className="relative w-full">
      <GallerySection />
      <ProjectGrid />
      <ProjectRepos products={products} />
    </div>
  );
};

// <SkillSection skillGroups={skillGroups} />
export default ProjectPage;
