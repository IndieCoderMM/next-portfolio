import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "liveURL",
      title: "Live URL",
      type: "url",
    },
    {
      name: "githubURL",
      title: "Github URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
    {
      name: "solution",
      title: "Solution",
      type: "array",
      description: "Write a full description about the solution you provided",
      of: [{ type: "block" }],
    },
    {
      name: "developedAt",
      title: "Developed At",
      type: "datetime",
      description: "Add the date when this project was developed",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description: "Add the tags for this project",
      of: [{ type: "string" }],
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      description: "Add the technologies used in this project",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
