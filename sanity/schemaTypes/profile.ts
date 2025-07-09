import { IconAddressBook } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

const profileSchema = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: IconAddressBook,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Your Name",
      initialValue: "Jim Awesome",
      validation: (rule) => rule.required().min(3).max(50),
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Short Bio",
      description: "A short bio to be shown on homepage",
      initialValue:
        "Here you can immediately impress your first visitors with some cool lines.",
      rows: 5,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "about",
      type: "array",
      title: "About You",
      description: "Write a full 'about me' section here",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Update Your Photo",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description: "Write Alt for image tag",
          validation: (rule) => rule.required(),
        },
        {
          name: "label",
          title: "Label",
          description: "Label to show under your photo",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Your CV (*.pdf)",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      description: "Where are you currently located?",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      description: "Empty links will not be shown on the page",
      type: "object",
      fields: [
        {
          name: "email",
          title: "Email Address",
          type: "string",
          validation: (rule) => rule.required().email(),
        },
        {
          name: "github",
          title: "GitHub",
          placeholder: "https://github.com/yourname",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          placeholder: "https://linkedin.com/in/yourname",
          type: "url",
        },
        {
          name: "blog",
          title: "Blog",
          placeholder: "https://yourblogwebsite.com",
          type: "url",
        },
        {
          name: "whatsapp",
          title: "WhatsApp",
          placeholder: "https://wa.me/",
          type: "url",
        },
        {
          name: "bluesky",
          title: "BlueSky",
          type: "url",
          placeholder: "https://bsky.app/profile/yourname",
        },
        {
          name: "twitter",
          title: "X (Twitter)",
          type: "url",
          placeholder: "https://x.com/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "object",
      description: "Add metrics to show on homepage",
      fields: [
        {
          name: "apps",
          title: "Apps",
          type: "number",
          initialValue: 0,
          description: "How many apps have you launched?",
        },
        {
          name: "websites",
          title: "Website",
          type: "number",
          initialValue: 0,
          description: "How many websites have you built?",
        },
        {
          name: "users",
          title: "Users",
          type: "number",
          initialValue: 0,
          description: "How many users have you handled?",
        },
        {
          name: "years",
          title: "Years of Experience",
          type: "number",
          initialValue: 0,
          description: "How many years of experience?",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    }),
  ],
});

export default profileSchema;
