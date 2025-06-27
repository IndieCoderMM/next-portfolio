import { defineField, defineType } from "sanity";

const profileSchema = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 5,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "about",
      title: "About Me",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
    },
    {
      name: "socials",
      title: "Social Links",
      description: "Add links to your social media profiles",
      type: "object",
      fields: [
        {
          name: "github",
          title: "GitHub",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "blog",
          title: "Blog",
          type: "url",
          initialValue: "https://",
        },
        {
          name: "whatsapp",
          title: "WhatsApp",
          type: "url",
          initialValue: "https://wa.me/",
        },
        {
          name: "bluesky",
          title: "BlueSky",
          type: "url",
          initialValue: "https://",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "metrics",
      title: "Metrics",
      type: "object",
      description: "Add metrics to your profile",
      fields: [
        {
          name: "apps",
          title: "Apps",
          type: "number",
          initialValue: 0,
          description: "Number of apps you have launched",
        },
        {
          name: "websites",
          title: "Website",
          type: "number",
          initialValue: 0,
          description: "Number of websites you have launched",
        },
        {
          name: "users",
          title: "Users",
          type: "number",
          initialValue: 0,
          description: "How many users did you handle?",
        },
        {
          name: "years",
          title: "Years of Experience",
          type: "number",
          initialValue: 0,
          description: "Number of years of experience you have",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
  ],
});

export default profileSchema;
