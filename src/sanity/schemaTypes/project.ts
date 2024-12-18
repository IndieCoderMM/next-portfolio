import { defineField, defineType } from "sanity";

const projectSchema = defineType({
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    }),
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
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
    {
      name: "development",
      title: "Development",
      type: "array",
      description:
        "Write a full description about the development of this project",
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
});

export default projectSchema;
