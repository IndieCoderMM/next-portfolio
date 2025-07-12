import { IconCode } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

const techSchema = defineType({
  name: "tech",
  title: "Technology",
  type: "document",
  icon: IconCode,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "icon",
      title: "Upload Icon",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "hidden",
      title: "Do not show on homepage",
      type: "boolean",
      initialValue: false,
      description:
        "Hide this technology from the public view. Still usable in projects.",
    }),
  ],
});

export default techSchema;
