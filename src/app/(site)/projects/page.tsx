import GallerySection from "@/features/projects/sections/gallery";

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

const ProjectPage = () => {
  return (
    <div className="w-full">
      <GallerySection />
    </div>
  );
};

// <SkillSection skillGroups={skillGroups} />
export default ProjectPage;
