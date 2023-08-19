import CustomButton from "@/components/CustomButton";
import { BackArrow, GitHubIcon, LinkArrow } from "@/components/Icons";
import RichText from "@/components/RichText";
import { getProject, getProjects } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
};

const ProjectDetail = async (props) => {
  const project = await getProject(props.params.slug);
  return (
    <main className="paddings">
      <section className="innerWidth mx-auto">
        <h2 className="mb-4 text-2xl font-bold md:text-5xl">{project.name}</h2>
        <h3 className="mb-4 text-lg font-semibold md:text-2xl">
          {project.tagline}
        </h3>
        <div className="flex items-center justify-between gap-4 py-4">
          <a
            href={project.liveURL}
            target="_blank"
            rel="noreferrer"
            className="blockBtn w-autogap-2 bg-white p-3 font-semibold text-dark md:px-8"
          >
            <div className="flex h-6 w-6 items-center justify-center md:h-8 md:w-8">
              <LinkArrow />
            </div>
            <span className="hidden text-xl  md:inline-block">
              Visit Website
            </span>
          </a>
          <a
            href={project.githubURL}
            target="_blank"
            rel="noreferrer"
            className="blockBtn w-auto gap-2 bg-white p-3 font-semibold text-dark md:px-8 "
          >
            <div className="flex h-6 w-6 items-center justify-center md:h-8 md:w-8">
              <GitHubIcon />
            </div>

            <span className="hidden text-xl md:inline-block">View Code</span>
          </a>
        </div>
        <div className="mb-8">
          <Image
            width={500}
            height={500}
            loading="lazy"
            src={project.imageURL}
            alt={project.name}
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-semibold uppercase md:text-2xl">
            About this project
          </h4>
          <RichText value={project.description} />
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-semibold md:text-2xl">
            Technologies
          </h4>
          <p className="mb-4">This project was built using:</p>
          <ul className="list-inside list-disc">
            {project.stack.map((tech) => (
              <li key={tech} className="capitalize">
                {tech.split("-").join(" ")}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/projects"
          className="btn fixed bottom-8 right-8 flex items-center gap-2 dark:border-light"
        >
          <div className="h-5 w-6">
            <BackArrow />
          </div>
          <span>Back</span>
        </Link>
      </section>
    </main>
  );
};

export default ProjectDetail;
