import PropTypes from "prop-types";

import { ProjectProps } from "@/propTypes";

const ProjectCard = (project) => {
  return (
    <div className="relative h-full w-full rounded-lg bg-white p-8 shadow-lg">
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <Image
          fill
          src={project.imageURL}
          alt={project.name}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative z-10">
        <h3 className="mb-4 text-2xl font-bold">{project.name}</h3>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: ProjectProps.isRequired,
};

export default ProjectCard;
