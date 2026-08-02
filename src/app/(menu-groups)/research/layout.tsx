import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research - Taiham",
  description:
    "Research interests and publications from Taiham. Spanning machine learning, data science, and quantum computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
