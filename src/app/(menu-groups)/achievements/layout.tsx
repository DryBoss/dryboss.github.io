import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DryBoss | Achievements",
  description:
    "Celebrate the milestones of Taiham AKA DryBoss, a dedicated developer and researcher. Explore key achievements in web development, machine learning, quantum computing, and open-source contributions that reflect a journey of innovation and impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
