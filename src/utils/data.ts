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
