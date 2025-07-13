import { IconBrowserCheck } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: IconBrowserCheck,
  fields: [
    defineField({
      name: "name",
      title: "Project Title",
      type: "string",
      validation: (rule) => rule.max(50).required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "A short, punchy line that sums up the project",
      validation: (rule) => rule.max(120).required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      description: "Project Status (e.g. live/archived)",
      initialValue: "live",
      options: {
        list: [
          { title: "Live", value: "live" },
          { title: "Archived", value: "archived" },
          { title: "In Development", value: "development" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required().max(10),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Why you built it and what makes it interesting",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      description: "List main features of this project.",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "development",
      title: "Development",
      description:
        "Mention the stack, tools, libraries, or any technical details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Add a custom slug for the URL",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "liveURL",
      title: "Live URL",
      type: "url",
    }),
    defineField({
      name: "githubURL",
      title: "Github URL",
      type: "url",
    }),
    defineField({
      name: "logoImage",
      title: "Upload Project Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "isFeatured",
      title: "Mark as Featured",
      type: "boolean",
      initialValue: false,
      description: "If checked, this project will be shown on the homepage",
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          title: "Upload Project Screenshot",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "developedAt",
      title: "Developed At",
      type: "datetime",
      description: "When was this product developed?",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Add keywords to help categorize the project",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stack",
      title: "Tech Stack",
      type: "array",
      description: "Add technologies used",
      of: [{ type: "reference", to: [{ type: "tech" }] }],
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "array",
      description: "Add languages used",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "language",
              title: "Language",
              description: "Language Name",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "percent",
              title: "Percent",
              description: "How many percentage?",
              type: "number",
              validation: (rule) => rule.min(0).max(100).required(),
            },
          ],
        },
      ],
    }),
  ],
});

export default projectSchema;
