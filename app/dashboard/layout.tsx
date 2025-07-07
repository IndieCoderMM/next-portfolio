export const metadata = {
  title: "Portfolio Dashboard | Sanity",
  description: "Manage your portfolio with Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
