import Footer from "@/components/Footer";
import { BackArrow, GitHubIcon, LinkArrow } from "@/components/Icons";
import RichText from "@/components/RichText";
import Transition from "@/components/Transition";
import { getProject, getProjects } from "@/sanity/sanity.query";
import getPlaceholder from "@/utils/getPlaceholder";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects by Hein Thant Oo - Full Stack Developer | Portfolio",
};

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
};

const ProjectDetail = async (props) => {
  const project = await getProject(props.params.slug);
  const {
    base64: placeholderURL,
    width,
    height,
  } = await getPlaceholder(project.imageURL);

  return (
    <main className="paddings">
      <Transition />
      <section className="innerWidth mx-auto">
        <header className="relative mt-10 md:mt-4">
          <h2 className="mb-4 text-xl font-bold md:text-5xl xl:text-6xl">
            {project.name}
          </h2>
          {/* Breadcumb */}
          <div className="absolute bottom-full flex items-center gap-2 text-sm font-medium text-dark dark:text-light md:text-lg">
            <Link
              href="/projects"
              className="dark:hover:text-primaryDark hover:text-primary hover:underline"
            >
              Projects
            </Link>
            <span>/</span>
            <span>{project.name}</span>
          </div>

          <a
            href={project.liveURL}
            target="_blank"
            rel="noreferrer"
            className="borderAnimate dark:hover:text-primaryDark dark:active:bg-primaryDark absolute bottom-full right-0 flex items-center justify-center p-2 underline transition-all hover:text-primary hover:no-underline active:bg-primary active:text-white dark:active:text-dark md:px-4 md:py-2"
          >
            <svg>
              <rect
                x="0"
                y="0"
                fill="none"
                width="100%"
                height="100%"
                className="dark:stroke-primaryDark stroke-primary"
              />
            </svg>
            <span className="hidden font-medium md:inline-block">
              Visit Website
            </span>
            <div className="flex h-6 w-6 items-center justify-center md:h-8 md:w-8">
              <LinkArrow />
            </div>
          </a>
        </header>
        <h3 className="mb-4 text-lg font-semibold md:text-2xl xl:text-3xl">
          {project.tagline}
        </h3>
        <div className="relative mb-8 overflow-hidden rounded-md bg-light shadow-xl">
          <div className="relative w-full bg-gray-300/70 p-1 dark:bg-gray-700 md:p-2">
            <div className="flex gap-1 p-1">
              <span className="h-3 w-3 rounded-full bg-red-500 lg:h-6 lg:w-6"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500 lg:h-6 lg:w-6"></span>
              <span className="h-3 w-3 rounded-full bg-green-500 lg:h-6 lg:w-6"></span>
            </div>
          </div>
          <Image
            width={width}
            height={height}
            quality={100}
            placeholder="blur"
            blurDataURL={placeholderURL}
            src={project.imageURL}
            alt={project.name}
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
          {/* Github badge */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 250 250"
            fill="#f5f5f5"
            className="absolute right-0 top-0 h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
          >
            <a
              title="View Source"
              href={project.githubURL}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <path
                d="M0 0l115 115h15l12 27 108 108V0z"
                fill="#fff"
                className="fill-sky-600"
              ></path>
              <path d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"></path>
              <path d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"></path>
            </a>
          </svg>
        </div>
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-semibold uppercase md:text-xl lg:text-3xl">
            About this project
          </h4>
          <div className="md:text-lg">
            <RichText value={project.description} />
          </div>
        </div>

        <div className="mb-8">
          <h4 className="mb-4 text-lg font-semibold uppercase md:text-xl lg:text-3xl">
            Development Process
          </h4>
          <div className=" md:text-lg">
            <RichText value={project.development} />
          </div>
        </div>
        <div className="mb-8 text-lg md:text-xl">
          <h4 className="mb-4 text-lg font-semibold uppercase md:text-xl lg:text-3xl">
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
      <section className="innerWidth mx-auto">
        <div className="interWidth yPaddings mx-auto flex flex-col items-center justify-center gap-4">
          <h3 className="text-center text-2xl font-semibold capitalize">
            See it Live
          </h3>
          <p className="text-center text-lg font-medium">
            Want to see this project in action? Visit the live website now and
            explore all its full functionality.
          </p>
          <a
            href={project.liveURL}
            target="_blank"
            rel="noreferrer"
            className="outlineBtn mt-8 rounded-full"
          >
            <div className="h-8 w-8">
              <LinkArrow />
            </div>
            Visit Website
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProjectDetail;
