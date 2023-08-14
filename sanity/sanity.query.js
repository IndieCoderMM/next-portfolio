import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[ _type == "profile" ]{
      _id,
      fullName,
      headline,
      profileImage {alt, "url": asset->url},
      bio,
      email,
      about,
      "resumeURL": resumeURL.asset->url,
      socials,
      skills,
    }[0]`,
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      name,
      tagline,
      "slug": slug.current,
      liveURL,
      githubURL,
      "coverImage": coverImage.asset->url,
      description,
      stack,
    }`,
  );
}
