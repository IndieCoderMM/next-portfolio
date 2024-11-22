import { IconBrandX, IconExternalLink } from "@tabler/icons-react";

const ProjectCard = ({
  project,
}: {
  project: { title: string; link: string; thumbnail: string };
}) => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center gap-8 overflow-hidden rounded-xl border border-light bg-white p-8 shadow-sm lg:min-h-[200px]">
      <header className="flex items-center gap-2">
        <IconBrandX className="text-primary" />
        <h3 className="text-xl font-bold text-black md:text-xl lg:text-2xl">
          {project.title}
        </h3>
      </header>
      <p className="text-center text-neutral-700 dark:text-neutral-200">
        A powerful, easy-to-configure form backend for designers and developers.
      </p>
      <a
        href={project.link}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-100/50 p-2 text-blue-500"
      >
        <IconExternalLink className="text-blue-500" />
        Visit Website
      </a>
    </div>
  );
};

export default ProjectCard;
