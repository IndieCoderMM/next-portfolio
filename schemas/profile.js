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
      description: "A short description of your work",
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
      name: "description",
      title: "Description",
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
          name: "leetcode",
          title: "LeetCode",
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
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "company",
              title: "Company",
              type: "string",
            },
            {
              name: "website",
              title: "Website",
              type: "url",
            },
            {
              name: "location",
              title: "Location",
              type: "string",
            },
            {
              name: "startDate",
              title: "Start Date",
              type: "date",
            },
            {
              name: "endDate",
              title: "End Date",
              type: "date",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "metrics",
      title: "Metrics",
      type: "object",
      description: "Add metrics to your profile",
      fields: [
        {
          name: "frontEnd",
          title: "Front-End Projects",
          type: "number",
          initialValue: 0,
          description: "Number of front end projects you have worked on",
        },
        {
          name: "fullStack",
          title: "Full-Stack Projects",
          type: "number",
          initialValue: 0,
          description: "Number of full-stack projects you have worked on",
        },
        {
          name: "experience",
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
};

export default profile;
