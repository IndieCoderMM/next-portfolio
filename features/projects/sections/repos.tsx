import GitHubCard from "@/components/common/github-card";
import Heading from "@/components/common/heading";
import { projectContent } from "@/config/content/projectPage";
import { ProjectsQueryResult } from "@/sanity.types";
import { IconCoffee } from "@tabler/icons-react";

const ProjectRepos = ({ products }: { products: ProjectsQueryResult }) => {
  return (
    <section className="inner-container">
      <div className="inner-container mt-16 mb-16">
        <div className="section-badge">
          <IconCoffee />
          <span className="ml-2">Personal Projects</span>
        </div>
        <Heading as="h3" className="mb-4 lg:mb-8">
          {projectContent.personalHeading}
        </Heading>
        <p className="cta-desc">{projectContent.personalDesc}</p>
      </div>
      <div className="my-10 grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:my-18 lg:gap-4">
        {products.map((product) => (
          <GitHubCard key={product._id} project={product} />
        ))}
      </div>
    </section>
  );
};

export default ProjectRepos;
