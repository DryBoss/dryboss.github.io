"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Convert slug to readable format
function formatProjectName(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function ProjectModal() {
  const router = useRouter();
  const params = useParams();
  const name = params.name as string;

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const displayName = formatProjectName(name);

  const handleClose = () => {
    setShow(false); // triggers exit animation
    setTimeout(() => {
      router.back(); // go back after animation
    }, 200); // match transition duration
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div
        className={`text-primary-dark bg-primary-light p-6 rounded-xl w-4/5 h-4/5 relative transform transition-transform duration-200 ease-out
        ${show ? "translate-y-0" : "translate-y-200"}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-0 right-5 text-6xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2 w-4/5">{displayName}</h2>
      </div>
    </div>
  );
}
