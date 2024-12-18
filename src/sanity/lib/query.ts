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

const productsQuery =
  defineQuery(`*[ _type == "product" ] | order(developedAt desc){
      "id": _id,
      name,
      tagline,
      "slug": slug.current,
      tags,
      languages[],
      status,
      stack,
      githubURL,
      liveURL,
      "logoImage": {"url": logoImage.asset->url, "alt": logoImage.alt},
      "coverImage": {"url": coverImage.asset->url, "alt": coverImage.alt},
      developedAt
    }`);

export const getProfile = async () => {
  const result = await client.fetch(profileQuery);

  return result;
};

export const getProducts = async () => {
  const result = await client.fetch(productsQuery);

  return result;
};
