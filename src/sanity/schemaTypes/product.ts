import { defineField, defineType } from "sanity";

const productSchema = defineType({
  name: "product",
  title: "Product",
  description: "Product Schema",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the product",
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
      name: "status",
      title: "Status",
      type: "string",
      description: "Add the status of this product",
    },
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
      name: "logoImage",
      title: "Logo Image",
      type: "image",
      description: "Upload a logo for this product",
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
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this product",
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
      name: "developedAt",
      title: "Developed At",
      type: "datetime",
      description: "Add the date when this product was developed",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description: "Add the tags for this product",
      of: [{ type: "string" }],
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      description: "Add the technologies used in this product",
      of: [{ type: "string" }],
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      description: "Add the languages & percent used in this product",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "language",
              title: "Language",
              type: "string",
            },
            {
              name: "percent",
              title: "Percent",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
});

export default productSchema;
