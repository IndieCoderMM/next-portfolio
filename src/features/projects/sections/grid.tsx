import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { products } from "@/config/projectData";
import ProjectCard from "../components/project-card";

const ProjectGrid = () => {
  return (
    <SectionContainer>
      <div className="mb-16">
        <Heading as="h3" className="mb-8 text-xl md:text-3xl lg:text-5xl">
          My Side Projects 🔥
        </Heading>
        <p className="ld:text-3xl font-medium md:text-xl">
          I enjoy building fun things in my free time.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectGrid;
