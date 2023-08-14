import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "portfolio-website",
  title: "Portfolio Website",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
