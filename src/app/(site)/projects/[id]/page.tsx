import Breadcrumb from "@/components/common/breadcrumb";
import Heading from "@/components/common/heading";
import { getProject } from "@/utils/data";
import { IconGitPullRequest } from "@tabler/icons-react";
import Image from "next/image";

const ProjectDetailPage = (props: any) => {
  const projectId = props.params.id;
  const project = getProject(projectId);

  return (
    <div className="max-container w-full">
      <Breadcrumb href={`/projects/${projectId}`} Icon={IconGitPullRequest} />
      <Heading className="text-left font-bold">{project.title}</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="mb-4 leading-loose text-black lg:text-3xl">
            {project.subtitle1}{" "}
            <span className="text-neutral-500">{project.subtitle2}</span>
          </h2>
          <p>{project.description}</p>
        </div>
        <div>
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1000}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
