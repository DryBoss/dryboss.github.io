// ❌ NO "use client" here — this is a Server Component

import { use } from "react";

export default function ProjectPage(props: {
  params: Promise<{ name: string }>;
}) {
  const { name } = use(props.params); // ✅ Unwrap Promise

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Project: {name}</h1>
      <p>This is the full page for {name}</p>
    </div>
  );
}
