import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Taiham (DryBoss)",
  description:
    "Web development and machine learning projects built by Taiham (DryBoss) — browse by category, or dive into any project for details, tech stack, and links.",
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>
) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
