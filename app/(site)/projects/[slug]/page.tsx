import AnimatedStack from "@/features/projects/components/animated-stack";
import ProjectImages from "@/features/projects/components/project-image";
import { ProjectDetailQueryResult } from "@/sanity.types";
import {
  getProjectDetail,
  getProjects,
  getProjectSlugs,
} from "@/sanity/lib/query";
import { getLanguageColor } from "@/utils/get-language-color";
import { getMetadata } from "@/utils/meta";
import {
  IconArchive,
  IconArrowLeft,
  IconBrandGithub,
  IconCircleDotted,
  IconCode,
  IconExternalLink,
  IconLink,
  IconTag,
  IconWorld,
} from "@tabler/icons-react";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const slugs = (await getProjectSlugs()) as string[];

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const project = await getProjectDetail({ slug: slugPath });

  if (!project?.name)
    return {
      title: "Project Not Found",
    };

  return getMetadata({
    title: project.name,
    description: project.tagline ?? "",
    image: `/api/og?title=${encodeURIComponent(project.name)}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getProjectDetail({ slug });
  const allProjects = await getProjects();

  const otherProjects = allProjects
    .filter((project) => project.slug !== slug)
    .slice(0, 5);

  const techStack =
    data?.stack?.filter((tech) => tech.title && tech.icon?.asset?.url) ?? [];

  const renderStatusIcon = (
    status: NonNullable<ProjectDetailQueryResult>["status"],
  ) => {
    switch (status) {
      case "live":
        return <IconWorld size={20} className="mr-1 inline-block" />;
      case "archived":
        return <IconArchive size={20} className="mr-1 inline-block" />;
      case "development":
        return <IconCode size={20} className="mr-1 inline-block" />;
      default:
        return <IconCircleDotted size={20} className="mr-1 inline-block" />;
    }
  };

  if (!data)
    return <div className="text-fg text-center">Project not found</div>;

  return (
    <main className="max-container relative px-4">
      <nav className="mb-2 text-sm tracking-wider">
        <Link
          href="/projects"
          className="text-text-secondary flex w-fit items-center gap-1 hover:text-white"
        >
          <IconArrowLeft className="mr-1 inline-block" />
          Projects
        </Link>
      </nav>

      <header className="mb-4">
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {data.name}
          </h1>
          <span className="bg-card text-card-fg border-fg/20 inline-block rounded-full border px-3 py-1 text-sm capitalize">
            {renderStatusIcon(data.status)}
            {data.status}
          </span>
        </div>
        <p className="text-secondary-fg/80 tracking-tight md:text-lg lg:text-xl">
          {data.tagline}
        </p>
      </header>

      <div className="border-border mb-10 flex flex-col justify-between gap-4 border-b pb-2 md:flex-row md:items-center md:gap-1">
        {data.stack && data.stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <AnimatedStack
              items={techStack.map((tech, i) => ({
                id: i,
                title: tech.title!,
                image: tech.icon?.asset?.url ?? "",
              }))}
            />
          </div>
        )}
        <div className="flex gap-4">
          {data.githubURL && (
            <a
              href={data.githubURL}
              target="_blank"
              className="text-secondary-fg/80 hover:text-secondary-fg flex cursor-pointer items-center justify-center gap-1 text-lg"
            >
              <IconBrandGithub className="h-4 w-4" />
              GitHub
            </a>
          )}
          {data.liveURL && (
            <a
              href={data.liveURL}
              target="_blank"
              className="text-secondary-fg/80 hover:text-secondary-fg flex cursor-pointer items-center justify-center gap-1 text-lg"
            >
              <IconExternalLink className="h-4 w-4" />
              Visit Live
            </a>
          )}
        </div>
      </div>

      <section className="grid grid-cols-12">
        <section className="col-span-12 space-y-8 lg:col-span-8">
          {data.screenshots && data.screenshots?.length > 0 && (
            <div className="relative mb-10 grid grid-cols-1 gap-6 sm:grid-cols-1">
              <ProjectImages
                title={data.name ?? "Project Screenshots"}
                images={data.screenshots.map((s) => s.url ?? "") ?? []}
              />
            </div>
          )}

          {data.description && (
            <article className="prose prose-invert text-fg max-w-none lg:text-lg">
              <h2 className="border-primary mb-4 border-l-4 pl-4 text-lg font-medium capitalize md:text-xl lg:text-2xl">
                Project Description
              </h2>
              <PortableText value={data.description} />
            </article>
          )}

          {data.features && (
            <article className="prose prose-invert text-fg max-w-none lg:text-lg">
              <h2 className="border-primary mb-4 border-l-4 pl-4 text-lg font-medium capitalize md:text-xl lg:text-2xl">
                Features
              </h2>
              <PortableText value={data.features} />
            </article>
          )}

          {data.development && (
            <article className="prose prose-invert text-fg max-w-none lg:text-lg">
              <h2 className="border-primary mb-4 border-l-4 pl-4 text-lg font-medium capitalize md:text-xl lg:text-2xl">
                Development
              </h2>
              <PortableText value={data.development} />
            </article>
          )}

          {data.languages && data.languages.length > 0 && (
            <div className="mt-8">
              <h2 className="border-primary mb-4 border-l-4 pl-4 text-lg font-medium capitalize md:text-xl lg:text-2xl">
                Languages Used
              </h2>
              <ul className="flex flex-col gap-1">
                {data.languages.map((lang) => (
                  <li
                    key={lang.language}
                    className="text-secondary-fg text-md flex w-full items-center gap-2 lg:text-lg"
                  >
                    <div
                      className="h-4"
                      style={{
                        backgroundColor: getLanguageColor(lang.language ?? ""),
                        width: lang.percent ? `${lang.percent}%` : "20px",
                      }}
                    />
                    <span className="whitespace-nowrap">{lang.language}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
        <section className="col-span-12 flex justify-end lg:col-span-4 lg:px-8">
          <div className="lg:border-border lg:bg-card/50 top-10 h-fit w-full rounded-lg lg:sticky lg:border lg:p-4">
            <div className="bg-border mt-10 mb-4 h-px w-full lg:hidden" />
            <div className="flex items-center gap-2">
              <IconTag className="text-secondary-fg/80 h-4 w-4" />
              <h2 className="text-fg text-lg font-medium">Tags</h2>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {data.tags?.map((tag) => (
                <li
                  key={tag}
                  className="bg-secondary-fg/10 text-secondary-fg rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="bg-border my-4 h-px w-full" />

            <div className="flex items-center gap-2">
              <IconLink className="text-secondary-fg/80 h-4 w-4" />
              <h2 className="text-fg text-lg font-medium">Other Projects</h2>
            </div>
            <ul className="mt-4 flex w-full flex-col">
              {otherProjects.map((project) => (
                <li key={project.slug} className="w-full">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-fg/80 block w-full rounded px-2 py-1 text-lg hover:text-white hover:underline"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
