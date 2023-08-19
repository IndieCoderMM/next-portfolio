import Footer from "@/components/Footer";
import { GitHubIcon } from "@/components/Icons";
import TitleText from "@/components/TitleText";
import Transition from "@/components/Transition";
import TypingText from "@/components/TypingText";
import { getProfile, getProjects } from "@/sanity/sanity.query";
import Projects from "@/sections/Projects";
import Link from "next/link";

// get all unique tags from projects
const getUniqueTags = (projects) => [
  ...new Set(
    projects
      .map((project) => project.tags)
      .flat(1)
      .filter(Boolean),
  ),
];

const ProjectsPage = async () => {
  const { socials } = await getProfile();
  const projects = await getProjects();
  const tags = getUniqueTags(projects);
  return (
    <main className="paddings">
      <Transition />
      <section className="innerWidth mx-auto">
        <TitleText text="My Recent Work" styles="text-center mb-8" />
        <p className="text-center text-xl font-medium">
          Here are some of my projects. Want to see more? Check out my{" "}
          <a
            href={socials.github}
            target="_blank"
            className="text-primary underline-offset-2 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <Projects projects={projects} tags={tags} />
        <div className="flex w-full items-center justify-center py-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-light md:px-12 md:py-4 md:text-lg"
          >
            <div className="h-8 w-8">
              <GitHubIcon className={`text-primary group-hover:text-white`} />
            </div>
            See More on GitHub
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
