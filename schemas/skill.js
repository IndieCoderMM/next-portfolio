import { defineField } from "sanity";

const skill = defineField("skill");

export default {
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
};
