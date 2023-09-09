import { getProfile, getProjects } from "@/sanity/sanity.query";
import getPlaceholder from "@/utils/getPlaceholder";

import Projects from "@/sections/Projects";

import Footer from "@/components/Footer";
import TitleText from "@/components/TitleText";
import { MessageOutlineIcon } from "@/components/Icons";
import CTA from "@/components/CTA";

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

export const revalidate = 60 * 60 * 24; // 24 hours

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
      } = await getPlaceholder(project.coverImg.url);
      return { ...project, placeholderURL, width, height };
    }),
  );

  return (
    <main className="w-full">
      <section className="paddings innerWidth mx-auto ">
        <TitleText text="My Recent Work" styles="text-center mb-8" />
        <p className="text-center text-xl font-medium">
          Here are some of my projects. Want to see more? Check out my{" "}
          <a
            href={socials.github}
            target="_blank"
            className="font-semibold text-primary-800 underline-offset-2 hover:underline hover:brightness-110 dark:text-primaryDark"
          >
            GitHub
          </a>
          .
        </p>
        <Projects projects={projectsWithPlaceholder} tags={tags} />
      </section>

      <CTA
        title={"Interested in working together?"}
        text={
          "I'm open to new opportunities! Whether you've got a project in mind, need some assistance, or just want to say hello, feel free to reach out."
        }
        href={"/contact"}
        buttonText={"Start a Conversation"}
        icon={MessageOutlineIcon}
      />

      <Footer />
    </main>
  );
};

export default ProjectsPage;
