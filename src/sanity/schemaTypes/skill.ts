import { defineType } from "sanity";

const skillSchema = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Skill Group Name",
      type: "string",
      description: "Name of the skill group",
      validation: (rule) => rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this skill group",
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
      name: "list",
      title: "List of Skills",
      type: "array",
      of: [
        {
          type: "object",
          name: "skill",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
});

export default skillSchema;
