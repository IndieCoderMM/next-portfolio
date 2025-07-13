import { defineQuery } from "next-sanity";
import { client } from "./client";

const REVALIDATE_INTERVAL = 3600; // every hour

const profileQuery = defineQuery(`*[ _type == "profile" ]{
      _id,
      _updatedAt,
      name,
      bio,
      about,
      location,
      "resumeURL": resumeURL.asset->url,
      "photo": {"url": photo.asset->url, "alt": photo.alt, "label": photo.label},
      lastUpdated,
      socials {github, email, linkedin, whatsapp, bluesky, blog},
      metrics {apps, websites, users, years},
    }[0]`);

const projectsQuery =
  defineQuery(`*[ _type == "project" ] | order(developedAt desc){
      _id,
      name,
      tagline,
      isFeatured,
      "slug": slug.current,
      tags,
      languages[],
      status,
      stack,
      githubURL,
      liveURL,
      "logoImage": {"url": logoImage.asset->url, "alt": logoImage.alt},
      "screenshots": screenshots[]{
        "url": asset->url,
      },
      developedAt
    }`);

const projectDetailQuery =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      tagline,
      description,
      features,
      development,
      slug,
      tags,
      languages,
      status,
      githubURL,
      liveURL,
      developedAt,
      "logoImage": {"url": logoImage.asset->url, "alt": logoImage.alt},
      "screenshots": screenshots[]{
        "url": asset->url,
      },
      stack[]-> { title, icon { asset->{url} } }
    }`);

const servicesQuery =
  defineQuery(`*[_type == "service"] | order(_createdAt asc){
    _id,
    title,
    description,
    icon { "url": asset->url, "alt": alt, "label": label }
  }`);

const techQuery = defineQuery(`*[_type == "tech"] | order(_createdAt asc){
    _id,
    title,
    hidden,
    icon { "url": asset->url, "alt": alt, "label": label }
  }`);

const projectSlugsQuery = defineQuery(
  `*[_type == "project" && defined(slug.current)][].slug.current`,
);

export const getProfile = async () => {
  const result = await client.fetch(
    profileQuery,
    {},
    {
      next: {
        revalidate: REVALIDATE_INTERVAL,
      },
    },
  );

  return result;
};

export const getProjects = async () => {
  const result = await client.fetch(
    projectsQuery,
    {},
    {
      next: {
        revalidate: REVALIDATE_INTERVAL,
      },
    },
  );

  return result;
};

export const getProjectSlugs = async () => {
  const result = await client.fetch(
    projectSlugsQuery,
    {},
    {
      next: {
        revalidate: REVALIDATE_INTERVAL,
      },
    },
  );

  return result;
};

export const getProjectDetail = async ({ slug }: { slug: string }) => {
  const data = await client.fetch(
    projectDetailQuery,
    { slug },
    {
      next: {
        revalidate: REVALIDATE_INTERVAL,
      },
    },
  );

  return data;
};

export const getServices = async () => {
  const result = await client.fetch(
    servicesQuery,
    {},
    {
      next: {
        revalidate: REVALIDATE_INTERVAL,
      },
    },
  );

  return result;
};

export const getTech = async () => {
  const result = await client.fetch(
    techQuery,
    {},
    {
      next: {
        revalidate: REVALIDATE_INTERVAL,
      },
    },
  );

  return result;
};
