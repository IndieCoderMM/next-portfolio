export const footerLinks: { title: string; links: FooterLink[] }[] = [
  {
    title: "Work",
    links: [
      { title: "Contact", href: "/contact" },
      { title: "Experience", href: "/about#experience" },
      { title: "Projects", href: "/projects" },
      {
        title: "Services",
        href: "/services",
        label: "soon",
      },
    ] as const,
  },
  {
    title: "Explore",
    links: [
      { title: "Studio", href: "/work/studio", label: "soon" },
      {
        title: "Playground",
        label: "soon",
        href: "/playground",
      },
      {
        title: "Guest Book",
        href: "/guestbook",
        label: "soon",
      },
      {
        title: "T.I.L",
        href: "/today-i-learned",
        label: "soon",
      },
    ],
  },
  {
    title: "This Site",
    links: [
      {
        title: "Source Code",
        href: "https://github.com/indiecodermm/next-portfolio",
        isInternal: false,
      },
      {
        title: "Site Map",
        href: "/sitemap.xml",
      },
    ],
  },
];
