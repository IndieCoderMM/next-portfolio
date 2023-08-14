import { defineField } from "sanity";

const profile = {
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
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "A short description of yourself",
      validation: (rule) => rule.required().min(40).max(80),
    }),
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description: "Describe the image for screen readers",
        },
      ],
    },
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
      name: "socials",
      title: "Social Links",
      description: "Add links to your social media profiles",
      type: "object",
      fields: [
        {
          name: "github",
          title: "Github",
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
          name: "twitter",
          title: "Twitter",
          type: "url",
          initialValue: "https://twitter.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    // Array of skills with logo and name
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
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

export default profile;
