import { getProjectDetail } from "@/sanity/lib/query";
import { PortableText } from "@portabletext/react";
import { IconArrowLeft, IconBrandGithub, IconGlobe } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

//export async function generateStaticParams() {
//  const slugs = await sanityFetch<string>(
//    groq`*[_type == "project" && defined(slug.current)].slug.current`
//  );
//
//  return slugs.map((slug) => ({ slug }));
//}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getProjectDetail({ slug });

  if (!data)
    return <div className="text-fg text-center">Project not found</div>;

  return (
    <main className="max-container relative px-4">
      <nav className="mb-2 text-sm tracking-wider">
        <Link
          href="/projects"
          className="text-text-secondary flex items-center gap-1 hover:text-white"
        >
          <IconArrowLeft className="mr-1 inline-block" />
          Projects
        </Link>
      </nav>

      <header className="mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-gradient text-4xl font-bold md:text-5xl lg:text-6xl">
            {data.name}
          </h1>
          <span className="bg-card text-card-fg border-fg/10 inline-block rounded border px-3 py-1 text-sm capitalize">
            {data.status}
          </span>
        </div>
        <p className="text-secondary-fg text-lg tracking-tight md:text-2xl lg:text-3xl">
          {data.tagline}
        </p>
      </header>

      <div className="border-secondary/40 mb-10 flex items-center justify-between border-b pb-2">
        {data.stack?.length > 0 && (
          <div className="flex flex-1 gap-2 overflow-x-auto">
            {data.stack.map((tech, i) => (
              <div
                key={i}
                className="bg-secondary flex h-[40px] w-[40px] items-center justify-center rounded-2xl"
              >
                {tech.icon?.asset?.url && (
                  <Image
                    src={tech.icon.asset.url}
                    alt={tech.title}
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
              className="text-secondary-fg border-secondary-fg/20 flex cursor-pointer items-center justify-center gap-1 rounded border bg-transparent px-4 py-2 hover:opacity-90"
            >
              <IconBrandGithub />
              GitHub
            </a>
          )}
          {data.liveURL && (
            <a
              href={data.liveURL}
              target="_blank"
              className="border-secondary-fg/20 text-secondary-fg flex cursor-pointer items-center justify-center gap-1 rounded border bg-transparent px-4 py-2 hover:opacity-90"
            >
              <IconGlobe />
              Live Site
            </a>
          )}
        </div>
      </div>

      {data.screenshots?.length > 0 && (
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {data.screenshots.map((shot, i) => (
            <Image
              key={i}
              src={shot.url || ""}
              alt={`Screenshot ${i + 1}`}
              width={800}
              height={600}
              className="border-secondary/20 rounded-xl border"
            />
          ))}
        </div>
      )}

      <article className="prose prose-invert text-fg max-w-none text-lg leading-tight md:text-xl lg:text-2xl">
        <h2 className="mb-4 text-lg font-medium md:text-xl lg:text-2xl">
          About the Project
        </h2>
        <PortableText value={data.description} />
      </article>

      {data.languages && data.languages.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-medium md:text-xl lg:text-2xl">
            Languages Used
          </h2>
          <ul className="flex list-inside list-disc flex-wrap gap-4">
            {data.languages.map((lang) => (
              <li
                key={lang.language}
                className="text-secondary-fg text-md md:text-lg lg:text-xl"
              >
                {lang.language} ({lang.percent}%)
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
