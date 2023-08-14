import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-14",
  useCdn: false,
};

const client = createClient(config);

export default client;
