"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

function formatProjectName(slug: string) {
  if (!slug) return "";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

type ProjectDetails = {
  name: string;
  description: string;
  technologies: string[];
  links: { [key: string]: string };
  images: string[];
};

export default function ProjectModal() {
  const router = useRouter();
  const params = useParams();
  const name = params.name as string;

  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
    null,
  );
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    fetch(`/api/projects/${encodeURIComponent(formatProjectName(name))}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [name]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      router.back();
    }, 250);
  };

  const hasImages = projectDetails?.images && projectDetails.images.length > 0;

  return (
    <div
      className={`${isDarkMode ? "dark" : ""} fixed inset-0 flex justify-center items-center z-50 p-4 selection:bg-orange-400`}
    >
      {/* Background Overlay with Backdrop Blur */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
      />

      {/* CRT Scanline Effect (Applied over the modal) */}
      <div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div
        className={`relative w-full max-w-4xl h-[85vh] flex flex-col text-primary-dark dark:text-primary-light bg-primary-light dark:bg-primary-dark border-2 border-black dark:border-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.1)] rounded-sm transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${show ? "translate-y-0 scale-100" : "translate-y-20 scale-95 opacity-0"}`}
      >
        {/* Close "Button" - Styled as a corner tag */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white bg-card-red text-white hover:scale-110 transition-transform z-30 font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          ✕
        </button>

        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-xs font-bold uppercase tracking-[0.4em] border-2 border-dashed border-current p-8 animate-pulse opacity-50">
              [ ACCESSING DATA... ]
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 relative">
            {/* Header Placard */}
            <div className="mb-10 border-l-4 border-black dark:border-white pl-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 pr-8 leading-none">
                {projectDetails?.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {projectDetails?.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-bold border-2 border-black/20 dark:border-white/20 uppercase tracking-tighter"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Showcase Image */}
            {hasImages ? (
              <div className="relative group w-full aspect-video border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] mb-12 bg-black overflow-hidden">
                <img
                  src={projectDetails.images[0]}
                  alt="Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
              </div>
            ) : (
              <div className="w-full py-20 mb-12 border-2 border-dashed border-black/10 dark:border-white/10 flex items-center justify-center opacity-30">
                <span className="text-xs font-bold uppercase tracking-[0.3em]">
                  [ NO SIGNAL ]
                </span>
              </div>
            )}

            {/* Description Text */}
            <div className="mb-16">
              <p className="text-lg md:text-xl leading-relaxed font-medium opacity-90 whitespace-pre-line border-b-2 border-black/5 dark:border-white/5 pb-12">
                {projectDetails?.description}
              </p>
            </div>

            {/* Links - Styled as Vouchers */}
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              {Object.entries(projectDetails?.links ?? {}).map(
                ([title, link]) => (
                  <Link
                    key={title}
                    href={link}
                    target="_blank"
                    className={`
                      flex-1 text-center py-4 text-xs font-bold uppercase tracking-[0.2em] border-2 border-black dark:border-white transition-all 
                      hover:-translate-y-1 hover:-translate-x-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]
                      active:translate-y-0 active:translate-x-0 active:shadow-none
                      ${
                        title.toLowerCase().includes("source") ||
                        title.toLowerCase().includes("github")
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-primary-light dark:bg-transparent text-black dark:text-white"
                      }
                    `}
                  >
                    {title}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? "white" : "black"};
          border-radius: 0px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
