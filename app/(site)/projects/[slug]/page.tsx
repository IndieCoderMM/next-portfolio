import ProjectImages from "@/features/projects/components/project-image";
import {
  getProjectDetail,
  getProjects,
  getProjectSlugs,
} from "@/sanity/lib/query";
import { getMetadata } from "@/utils/meta";
import { PortableText } from "@portabletext/react";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconGlobe,
  IconLink,
  IconTag,
} from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
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
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {data.name}
          </h1>
          <span className="bg-card text-card-fg border-fg/20 inline-block rounded-full border px-3 py-1 text-sm capitalize">
            {data.status}
          </span>
        </div>
        <p className="text-secondary-fg/80 tracking-tight md:text-lg lg:text-xl">
          {data.tagline}
        </p>
      </header>

      <div className="border-secondary/40 mb-10 flex flex-col justify-between gap-4 border-b pb-2 md:flex-row md:items-center md:gap-1">
        {data.stack && data.stack.length > 0 && (
          <div className="flex flex-1 gap-2 overflow-x-auto">
            {data.stack.map((tech, i) => (
              <div
                key={i}
                className="bg-secondary flex h-[40px] w-[40px] items-center justify-center rounded-2xl"
              >
                {tech.icon?.asset?.url && (
                  <Image
                    src={tech.icon.asset.url}
                    alt={tech.title || "Tech Icon"}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                )}
              </div>
            ))}
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
              <IconGlobe className="h-4 w-4" />
              Live Site
            </a>
          )}
        </div>
      </div>

      <section className="grid grid-cols-12">
        <section className="col-span-12 lg:col-span-8">
          {data.screenshots && data.screenshots?.length > 0 && (
            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-1">
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

          {data.languages && data.languages.length > 0 && (
            <div className="mt-10">
              <h2 className="border-primary mb-4 border-l-4 pl-4 text-lg font-medium capitalize md:text-xl lg:text-2xl">
                Languages Used
              </h2>
              <ul className="flex list-inside list-disc flex-col gap-1">
                {data.languages.map((lang) => (
                  <li
                    key={lang.language}
                    className="text-secondary-fg text-md lg:text-lg"
                  >
                    {lang.language} ({lang.percent}%)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
        <section className="col-span-12 flex justify-end lg:col-span-4 lg:px-8">
          <div className="lg:border-secondary-fg/10 lg:bg-card/50 top-20 h-fit w-full rounded-lg lg:sticky lg:border lg:p-4">
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
              {allProjects
                .filter((p) => p.slug !== data.slug)
                .slice(0, 5)
                .map((project) => (
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
