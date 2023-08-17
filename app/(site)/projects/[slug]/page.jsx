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
        <h2 className="mb-4 text-7xl font-bold">{project.name}</h2>
        <h3 className="mb-8 text-3xl font-semibold">{project.tagline}</h3>
        <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
          <a
            href={project.liveURL}
            target="_blank"
            rel="noreferrer"
            className="blockBtn w-full max-w-[300px] gap-2 bg-white px-4 py-3 text-lg font-semibold text-dark md:w-auto md:px-8 md:text-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center">
              <LinkArrow />
            </div>
            Visit Website
          </a>
          <a
            href={project.githubURL}
            target="_blank"
            rel="noreferrer"
            className="blockBtn w-full max-w-[300px] gap-2 bg-white px-4 py-3 text-lg font-semibold text-dark md:w-auto md:px-8 md:text-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center">
              <GitHubIcon />
            </div>

            <span>View Code</span>
          </a>
        </div>
        <div className="mb-8">
          <Image
            width={0}
            height={0}
            src={project.imageURL}
            alt={project.name}
            sizes="100vw"
            className="w-full object-contain"
          />
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold uppercase">
            About this project
          </h4>
          <RichText value={project.description} />
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-2xl font-semibold">Technologies</h4>
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
