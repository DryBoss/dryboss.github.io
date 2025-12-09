"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

// Convert slug to readable format
function formatProjectName(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

type ProjectDetails = {
  name: string;
  description: string;
  technologies: string[];
  links: string[];
  images: string[];
};

export default function ProjectModal() {
  const router = useRouter();
  const params = useParams();
  const name = params.name as string;

  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
    null
  );
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    fetch(`/api/projects/${encodeURIComponent(formatProjectName(name))}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
        setMounted(true);
      });
  }, [name]);

  const handleClose = () => {
    setShow(false); // triggers exit animation
    setTimeout(() => {
      router.back(); // go back after animation
    }, 200); // match transition duration
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div
        className={`max-w-180 flex flex-col justify-between text-primary-dark bg-primary-light p-8 rounded-xl w-4/5 h-4/5 relative transform transition-transform duration-200 ease-out
        ${show ? "translate-y-0" : "translate-y-200"}`}
      >
        <button
          onClick={handleClose}
          className="text-card-red absolute top-0 right-5 text-6xl font-black"
        >
          ×
        </button>
        <div>
          <h2
            className={`m-2 text-2xl overflow-hidden whitespace-nowrap 
              transition-all duration-[1000ms] ${mounted ? "w-[13ch]" : "w-0"}`}
          >
            {projectDetails?.name}
          </h2>
          <div className={` flex `}>
            {projectDetails?.technologies.map((tech) => (
              <p
                key={tech}
                className="px-3 py-2 m-1 text-md text-primary-dark border-3 border-primary-dark rounded-full"
              >
                {tech}
              </p>
            ))}
          </div>
          <p className="m-2 text-lg tracking-widest">
            {projectDetails?.description}
          </p>
        </div>

        <div className="my-2 flex">
          {Object.entries(projectDetails?.links ?? {}).map(([title, link]) => (
            <Link
              key={title}
              href={link}
              className={`m-2 px-3 py-2 text-sm tracking-widest text-primary-dark rounded hover:shadow-lg active:shadow-inner ${
                title === "source"
                  ? "bg-tertiary-black"
                  : title === "play"
                  ? "bg-tertiary-green"
                  : ""
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
