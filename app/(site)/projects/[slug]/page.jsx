import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import { BackArrow, GitHubIcon, LinkArrow } from "@/components/Icons";
import RichText from "@/components/RichText";
import Transition from "@/components/Transition";
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
      <Transition />
      <section className="innerWidth mx-auto">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">{project.name}</h2>
        <h3 className="mb-4 text-lg font-semibold md:text-2xl">
          {project.tagline}
        </h3>
        <div className="flex items-center justify-between gap-4 py-4">
          <a
            href={project.liveURL}
            target="_blank"
            rel="noreferrer"
            className="blockBtn w-autogap-2 bg-white p-2 font-semibold text-dark md:px-8"
          >
            <div className="hidden h-6 w-6 items-center justify-center md:flex md:h-8 md:w-8">
              <LinkArrow />
            </div>
            <span className="md:text-xl">Visit Website</span>
          </a>
          <a
            href={project.githubURL}
            target="_blank"
            rel="noreferrer"
            className="blockBtn w-auto gap-2 bg-white p-2 font-semibold text-dark md:px-8 "
          >
            <div className="hidden h-6 w-6 items-center justify-center md:flex md:h-8 md:w-8">
              <GitHubIcon />
            </div>

            <span className="md:text-xl">View Code</span>
          </a>
        </div>
        <div className="mb-8 overflow-hidden rounded-md bg-light shadow-md">
          <div className="relative w-full bg-gray-300/70 p-1 dark:bg-gray-700 md:p-2">
            <div className="flex gap-1">
              <span className="h-3 w-3 rounded-full bg-red-500 lg:h-5 lg:w-5"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500 lg:h-5 lg:w-5"></span>
              <span className="h-3 w-3 rounded-full bg-green-500 lg:h-5 lg:w-5"></span>
            </div>
          </div>
          <Image
            width={500}
            height={300}
            loading="lazy"
            quality={100}
            placeholder="blur"
            blurDataURL="/loading-placeholder.gif"
            src={project.imageURL}
            alt={project.name}
            sizes="100vw"
            className="h-auto min-h-[200px] w-full object-fill md:object-contain"
          />
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-xl font-semibold uppercase md:text-3xl">
            About this project
          </h4>
          <div className="text-lg md:text-xl">
            <RichText value={project.description} />
          </div>
        </div>

        <div className="mb-8">
          <h4 className="mb-4 text-xl font-semibold uppercase md:text-3xl">
            Development Process
          </h4>
          <div className="text-lg md:text-xl">
            <RichText value={project.development} />
          </div>
        </div>
        <div className="mb-8 text-lg md:text-xl">
          <h4 className="mb-4 text-xl font-semibold md:text-3xl">
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
          className="btn fixed bottom-4 right-4 flex items-center gap-2 bg-light/70 px-2 py-1 shadow-md backdrop-blur-sm transition-colors hover:brightness-110 dark:border-light dark:bg-dark/70 md:bottom-8 md:right-8"
        >
          <div className="h-5 w-6">
            <BackArrow />
          </div>
          <span className="hidden md:inline-block">Back</span>
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default ProjectDetail;
