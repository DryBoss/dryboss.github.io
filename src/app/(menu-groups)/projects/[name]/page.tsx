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
    null
  );
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    fetch(`/api/projects/${encodeURIComponent(formatProjectName(name))}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
        setLoading(false);
        setMounted(true);
      })
      .catch(() => setLoading(false));
  }, [name]);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  if (loading) {
    return (
      <main className="h-screen w-full bg-primary-light text-primary-dark flex flex-col justify-center items-center overflow-hidden">
        <div className="text-xl font-bold uppercase tracking-widest animate-pulse border-[3px] border-dashed border-primary-dark p-6 rounded-[2rem]">
          Loading Project Data...
        </div>
      </main>
    );
  }

  return (
    // MAIN CONTAINER: Locked height (h-screen) and hidden overflow (no page scroll)
    <main className="h-screen w-full bg-primary-light text-primary-dark overflow-hidden flex flex-col items-center justify-center p-6">
      {/* CARD CONTAINER */}
      <div
        className={`
          max-w-5xl w-full h-full max-h-[90vh] relative flex flex-col
          transform transition-all duration-0 cubic-bezier(0.17, 0.55, 0.55, 1)
          ${show ? "translate-y-0 opacity-100" : "translate-y-[20%] opacity-0"}
        `}
      >
        {/* TOP SECTION: Back button & Header (Fixed) */}
        <div className="flex-shrink-0">
          <button
            onClick={handleBack}
            className="mb-6 px-4 py-2 font-bold uppercase tracking-widest border-[3px] border-primary-dark rounded-full hover:bg-black hover:text-white transition-colors duration-200"
          >
            ← Back
          </button>

          <h1
            className={`pb-2
              text-3xl md:text-5xl font-black tracking-widest
         
              transition-all duration-[1000ms] ease-linear
              ${mounted ? "w-full" : "w-0"}
            `}
          >
            {projectDetails?.name}
          </h1>

          <div className="flex flex-wrap mt-4 gap-2">
            {projectDetails?.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 text-sm md:text-base font-bold text-primary-dark border-[3px] border-primary-dark rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="w-full border-t-[3px] border-dashed border-primary-dark/30 my-6" />
        </div>

        {/* MIDDLE SECTION: Description (Scrollable internally but hidden scrollbar) */}
        <div className="flex-1 overflow-y-auto pr-4 scrollbar-hide">
          <style jsx>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            /* Hide scrollbar for IE, Edge and Firefox */
            .scrollbar-hide {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
          <article className="prose prose-lg max-w-none text-primary-dark">
            <p className="text-xl md:text-2xl leading-relaxed tracking-wide font-medium opacity-90 whitespace-pre-line">
              {projectDetails?.description}
            </p>
          </article>
        </div>

        {/* BOTTOM SECTION: Links (Fixed) */}
        <div className="flex-shrink-0 pt-6 mt-2 border-t-[3px] border-dashed border-primary-dark/30">
          <div className="flex flex-wrap gap-4">
            {Object.entries(projectDetails?.links ?? {}).map(
              ([title, link]) => (
                <Link
                  key={title}
                  href={link}
                  target="_blank"
                  className={`
                  px-8 py-4 text-lg font-bold tracking-widest uppercase rounded-xl border-[3px] border-black
                  transition-all duration-0
                  hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
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
      </div>
    </main>
  );
}
