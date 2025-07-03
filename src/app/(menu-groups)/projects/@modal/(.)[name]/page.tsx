"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectModal() {
  const router = useRouter();
  const params = useParams();
  const name = params.name as string;

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div
        className={`bg-white p-6 rounded-xl max-w-md w-full relative transform transition-transform duration-200 ease-out
        ${show ? "translate-y-0" : "translate-y-200"}`}
      >
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2">Project: {name}</h2>
        <p>More details about {name}...</p>
      </div>
    </div>
  );
}
