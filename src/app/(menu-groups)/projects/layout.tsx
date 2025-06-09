import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DryBoss | Projects",
  description:
    "Explore the portfolio of Taiham AKA DryBoss, a passionate developer and researcher skilled in web development, machine learning, quantum computing and open-source innovation. Discover projects, research, and creative work all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
