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
      description,
      "resumeURL": resumeURL.asset->url,
      socials {github, linkedin, whatsapp, blog},
      metrics {frontEnd, fullStack, experience},
      experiences[] { title, company, website, location, startDate, endDate, description},
    }[0]`,
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(developedAt desc){
      "id": _id,
      name,
      tagline,
      developedAt,
      tags,
      "slug": slug.current,
      liveURL,
      githubURL,
      "imageURL": coverImage.asset->url,
      description,
      development,

      stack,
    }`,
  );
}

export async function getProject(slug) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug]{
      "id": _id,
      name,
      tagline,
      developedAt,
      tags,
      "slug": slug.current,
      liveURL,
      githubURL,
      "imageURL": coverImage.asset->url,
      description,
      development,
      stack,
    }[0]`,
    { slug },
  );
}

export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skills"] | order(_createdAt asc) {
      "id": _id,
      title,
      "imageURL": coverImage.asset->url,
      list[] { name, "logoURL": logo.asset->url },
    }`,
  );
}
