import { getProfile, getProjects } from "@/sanity/sanity.query";

import Footer from "@/components/Footer";
import TitleText from "@/components/TitleText";
import Transition from "@/components/Transition";
import Projects from "@/sections/Projects";
import getPlaceholder from "@/utils/getPlaceholder";
import { MessageOutlineIcon } from "@/components/Icons";

export const metadata = {
  title: "Projects by Hein Thant Oo - Full Stack Developer | Portfolio",
};

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

  const projectsWithPlaceholder = await Promise.all(
    projects.map(async (project) => {
      const {
        base64: placeholderURL,
        width,
        height,
      } = await getPlaceholder(project.imageURL);
      return { ...project, placeholderURL, width, height };
    }),
  );

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
            className="dark:text-primaryDark text-primary underline-offset-2 hover:underline hover:brightness-110"
          >
            GitHub
          </a>
          .
        </p>
        <Projects projects={projectsWithPlaceholder} tags={tags} />
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
          <a href="/contact" className="outlineBtn mt-8 rounded-full">
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
