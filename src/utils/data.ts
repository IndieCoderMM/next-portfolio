export const getProfile = () => {
  const profile = {
    bio: "Transforming 💡 ideas into seamless digital experiences 📈 ",
    description:
      "I'm a software engineer, a tech enthusiast, and a lifelong learner.",
    resumeURL:
      "https://drive.google.com/file/d/1JYkQ9WvZ2gR2zV7u5Q5V1Z1U4U3vZv0T/view?usp=sharing",
    fullName: "Johnathan William Snow",
    email: "heinthant@gmail.com",
    socials: {
      github: "github.com/heinthanth",
      linkedin: "linkedin.com/in/heinthanth",
      whatsapp: "https://wa.me/959777777777",
      blog: "https://heinthanth.com",
    },
  };

  return profile;
};

export const getProject = (id: number) => {
  const project = {
    id,
    title: "Easy2Success",
    subtitle1: "Globarl marketplace",
    subtitle2: "for the precious gamers",
    description:
      "The typical ship supply procurement process is manual, expensive and painful. The industry is plagued by catalog data scarcity, manual approval processes, and tactical instead of planned and strategic purchasing.",
    challenge:
      "Marinade stands out in the world of DeFi. While most apps overwhelm users with complex dashboards, charts, and endless numbers, Marinade takes a refreshingly different approach with its simplicity. Originally designed as a mobile-first app, I aimed to enhance this streamlined experience even further.My goal was to make the app accessible to newcomers while still catering to the many advanced users among Marinade's user base. Striking this balance was crucial.",
    outcomes: [
      "Launched product & company to market in under 11 months",
      "Handed over future org chart, design hiring, and OKRs.",
      "Handed-over a cross-platform design system for the incoming design team",
      "First customers includes a international shipping line with a fleet of over 500+ vessels.",
    ],
    images: ["/screenshots/e2s.webp"],
  };

  return project;
};
