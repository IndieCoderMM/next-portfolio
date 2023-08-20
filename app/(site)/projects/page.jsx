import Footer from "@/components/Footer";
import {
  GitHubIcon,
  GitHubOutlineIcon,
  MessageOutlineIcon,
} from "@/components/Icons";
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
      </section>
      <section className="innerWidth mx-auto">
        <div className="interWidth yPaddings mx-auto flex flex-col items-center justify-center gap-4">
          <h3 className="text-center text-2xl font-semibold">
            Interested in working together?
          </h3>
          <p className="text-center text-lg font-medium">
            I'm open to new opportunities! Whether you've got a project in mind,
            need some assistance, or just want to say hello, feel free to reach
            out.
          </p>
          <a
            href="/contact"
            className="group mt-8 flex items-center justify-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-center font-semibold text-primary transition-colors hover:bg-primary hover:text-light md:px-8 md:py-4 md:text-lg"
          >
            <div className="h-8 w-8">
              <MessageOutlineIcon />
            </div>
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;
