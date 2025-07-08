import { defineQuery } from "next-sanity";
import { client } from "./client";

const profileQuery = defineQuery(`*[ _type == "profile" ]{
      _id,
      fullName,
      bio,
      about,
      email,
      "resumeURL": resumeURL.asset->url,
      lastUpdated,
      socials {github, linkedin, whatsapp, bluesky, blog},
      metrics {apps, websites, users, years},
    }[0]`);

const projectsQuery =
  defineQuery(`*[ _type == "project" ] | order(developedAt desc){
      "id": _id,
      name,
      tagline,
      description,
      "slug": slug.current,
      tags,
      languages[],
      status,
      stack,
      githubURL,
      liveURL,
      about[], 
      "logoImage": {"url": logoImage.asset->url, "alt": logoImage.alt},
      developedAt
    }`);

export const getProfile = async () => {
  const result = await client.fetch(profileQuery);

  return result;
};

export const getProducts = async () => {
  const result = await client.fetch(projectsQuery);

  return result;
};
