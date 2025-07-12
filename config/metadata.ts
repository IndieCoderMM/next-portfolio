import { profile } from "./profile";

export const metaTexts = {
  home: {
    title: `${profile.name} · ${profile.title}`,
    description:
      "My corner of the internet to share projects I’ve built and a bit about what drives me as a developer.",
  },
  about: {
    title: "About | " + `${profile.name} · ${profile.title}`,
    description:
      "A little about me, my journey, and my experiences as a self-taught developer.",
  },
  contact: {
    title: "Contact | " + `${profile.name} · ${profile.title}`,
    description:
      "Questions, ideas or just a quick hello, this is the place to react me. Let's connect!",
  },
  projects: {
    title: "Projects | " + `${profile.name} · ${profile.title}`,
    description:
      "Showcase of apps and ideas I've brought to life. From games to web apps, and everything in between.",
  },
};
