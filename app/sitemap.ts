import { siteUrl } from "@/config";
import { navLinks } from "@/config/navLinks";
import { getProjects } from "@/sanity/lib/query";

export default async function sitemap() {
  const projectList = await getProjects();

  const projects = projectList.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(project._updatedAt).toISOString(),
  }));

  const routes = navLinks.map(({ href: route }) => ({
    url: `${siteUrl}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...projects];
}
