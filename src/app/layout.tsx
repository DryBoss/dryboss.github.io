import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "DryBoss",
  description:
    "Explore the portfolio of Taiham AKA DryBoss, a passionate developer and researcher skilled in web development, machine learning, quantum computing and open-source innovation. Discover projects, research, and creative work all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={``}>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
