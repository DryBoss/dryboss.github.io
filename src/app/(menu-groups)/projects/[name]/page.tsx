"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

function formatProjectName(slug: string) {
  if (!slug) return "";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

type ProjectDetails = {
  name: string;
  description: string;
  technologies: string[];
  links: { [key: string]: string };
  images: string[];
};

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const name = params.name as string;

  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    fetch(`/api/projects/${encodeURIComponent(formatProjectName(name))}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
        setLoading(false);
        setTimeout(() => setMounted(true), 100);
      })
      .catch(() => setLoading(false));
  }, [name]);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const hasImages = projectDetails?.images && projectDetails.images.length > 0;

  if (loading) {
    return (
      <main
        className={`${isDarkMode ? "dark" : ""} h-screen w-full bg-primary-light dark:bg-primary-dark flex items-center justify-center`}
      >
        <div className="text-sm font-bold uppercase tracking-[0.3em] animate-pulse border-2 border-black dark:border-white p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
          [ Fetching Data Stream... ]
        </div>
      </main>
    );
  }

  return (
    <main
      className={`${isDarkMode ? "dark" : ""} min-h-screen w-full bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light flex flex-col items-center p-4 md:p-12 overflow-x-hidden selection:bg-orange-400`}
    >
      {/* CRT Overlay for consistent "Screen" feel */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* 1. TOP NAVIGATION */}
      <nav className="w-full max-w-6xl flex justify-between items-center mb-16 relative z-10">
        <button
          onClick={handleBack}
          className="px-6 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black dark:border-white transition-all hover:-translate-y-1 hover:-translate-x-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-0 active:shadow-none bg-primary-light dark:bg-primary-dark"
        >
          ← Back to Deck
        </button>
        <div className="hidden md:block text-[10px] font-bold opacity-30 tracking-[0.5em] uppercase border-b-2 border-black/10 dark:border-white/10 pb-1">
          Archive // {name.toUpperCase()}
        </div>
      </nav>

      {/* 2. MAIN CONTENT AREA */}
      <div
        className={`w-full max-w-6xl transform transition-all duration-700 ease-out ${show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} relative z-10`}
      >
        {/* HEADER - Styled as a thick Placard */}
        <header className="mb-16 border-l-8 border-black dark:border-white pl-8 py-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
            {projectDetails?.name}
          </h1>

          <div className="flex flex-wrap gap-2">
            {projectDetails?.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-2 border-black dark:border-white bg-primary-light dark:bg-primary-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* MEDIA SECTION - The "Master Card" */}
        <section className="relative w-full aspect-video border-2 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] mb-20 bg-black overflow-hidden group">
          {hasImages ? (
            <>
              <img
                src={projectDetails.images[currentImage]}
                alt="Capture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Scanline effect specifically for the image */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />

              {projectDetails.images.length > 1 && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {[0, 1].map((dir) => (
                    <button
                      key={dir}
                      onClick={() =>
                        setCurrentImage((prev) =>
                          dir === 0
                            ? (prev - 1 + projectDetails.images.length) %
                              projectDetails.images.length
                            : (prev + 1) % projectDetails.images.length,
                        )
                      }
                      className="w-10 h-10 bg-primary-light dark:bg-primary-dark text-current border-2 border-black dark:border-white font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                    >
                      {dir === 0 ? "←" : "→"}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center opacity-30 italic">
              <span className="text-sm font-bold tracking-[0.4em]">
                [ NO SIGNAL ]
              </span>
            </div>
          )}
          {/* Decorative Corner Tab */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-black dark:bg-white rotate-45 translate-x-6 -translate-y-6" />
        </section>

        {/* INFO SECTION */}
        <section className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">
                Documentation
              </h3>
              <div className="h-[1px] flex-grow bg-black/10 dark:bg-white/10" />
            </div>
            <article className="max-w-none">
              <p className="text-xl md:text-2xl leading-relaxed font-medium whitespace-pre-line opacity-90">
                {projectDetails?.description}
              </p>
            </article>
          </div>

          <aside className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-4">
              External_Access
            </h3>
            {Object.entries(projectDetails?.links ?? {}).map(
              ([title, link]) => (
                <Link
                  key={title}
                  href={link}
                  target="_blank"
                  className={`
                  w-full text-center py-4 text-sm font-bold uppercase tracking-[0.2em] border-2 border-black dark:border-white transition-all 
                  hover:-translate-y-1 hover:-translate-x-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.05)]
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
          </aside>
        </section>
      </div>

      <footer className="w-full max-w-6xl mt-auto py-8 border-t-2 border-black/5 dark:border-white/5 text-center opacity-20 text-[10px] font-bold uppercase tracking-[0.5em]">
        End of Transmission // {new Date().getFullYear()}
      </footer>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? "white" : "black"};
          border: 2px solid ${isDarkMode ? "#0a0a0a" : "#ffffff"};
        }
      `}</style>
    </main>
  );
}
