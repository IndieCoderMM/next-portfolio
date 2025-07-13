declare type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

declare type NavLink = {
  title: string;
  icon: React.ReactNode;
  href: string;
  type?: "internal" | "external";
};

declare type FooterLink = {
  title: string;
  href: string;
  label?: "new" | "soon";
  isInternal?: boolean;
};
