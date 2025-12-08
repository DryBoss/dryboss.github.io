import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DryBoss | Writings",
  description:
    "Dive into the thoughts and writings of Taiham AKA DryBoss. From insightful articles on web development, machine learning, and quantum computing to personal reflections and technical explorations — discover a world of ideas, experience, and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
