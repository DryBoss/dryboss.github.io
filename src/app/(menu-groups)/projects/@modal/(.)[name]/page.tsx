"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

// Convert slug to readable format
function formatProjectName(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

// Updated type to match the object usage in your map function
type ProjectDetails = {
  name: string;
  description: string;
  technologies: string[];
  links: { [key: string]: string }; // Changed from string[] to object map
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
  const [loading, setLoading] = useState(true);

  // Trigger entrance animation
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  // Fetch Data
  useEffect(() => {
    setLoading(true);
    fetch(`/api/projects/${encodeURIComponent(formatProjectName(name))}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [name]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setShow(false); // Trigger exit animation
    setTimeout(() => {
      router.back(); // Navigate back after animation matches duration
    }, 300);
  };

  return (
    // Backdrop with blur
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300">
      {/* Modal Card */}
      <div
        className={`
          relative w-full max-w-2xl max-h-[90vh] flex flex-col justify-between 
          text-primary-dark bg-primary-light 
          border-[3px] border-black dark:border-white
          shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]
          rounded-[2rem] p-8 
          transform transition-transform duration-300 ease-out
          ${show ? "translate-y-0 scale-100" : "translate-y-[100vh] scale-95"}
        `}
      >
        {/* Close Button (Physical Style) */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center 
            border-[3px] border-card-red rounded-full text-card-red 
            hover:bg-card-red hover:text-white transition-colors duration-0 z-10"
        >
          <span className="text-2xl font-black pb-1">×</span>
        </button>

        {loading ? (
          // Retro Loading State
          <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] animate-pulse">
            <div className="text-xl font-bold uppercase tracking-widest border-2 border-dashed border-current p-4">
              [ Reading Disk... ]
            </div>
          </div>
        ) : (
          // Content
          <div className="flex flex-col h-full overflow-hidden">
            {/* Header Section */}
            <div className="mb-6 pr-12">
              <h2 className="text-4xl tracking-tighter mb-4">
                {projectDetails?.name}
              </h2>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {projectDetails?.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-bold border-[2px] border-primary-dark rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Scrollable Description */}
            <div className="overflow-y-auto custom-scrollbar flex-grow mb-6 pr-2">
              <p className="text-lg leading-relaxed tracking-wide opacity-90 whitespace-pre-line">
                {projectDetails?.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t-[3px] border-dashed border-primary-dark/30">
              {Object.entries(projectDetails?.links ?? {}).map(
                ([title, link]) => (
                  <Link
                    key={title}
                    href={link}
                    target="_blank"
                    className={`
                    px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-lg border-[3px] border-black
                    transition-all duration-0 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    active:translate-y-0 active:shadow-none
                    ${
                      title === "source"
                        ? "bg-tertiary-black text-white"
                        : title === "play"
                        ? "bg-tertiary-green text-black"
                        : "bg-white text-black"
                    }
                  `}
                  >
                    {title}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
