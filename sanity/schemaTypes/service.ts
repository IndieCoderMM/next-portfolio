import { IconBriefcase } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

const serviceSchema = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: IconBriefcase,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Upload Icon",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

export default serviceSchema;
