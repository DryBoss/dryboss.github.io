"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

// --- Types ---
type Project = {
  _id: string;
  name: string;
  description: string;
  technologies: string[];
  field: string;
  type: string;
  priority: number;
};

type Category = "web development" | "machine learning" | "none";

interface ProjectsProps {
  currentCategory: Category;
}

// --- Icons ---
const icons: { [key: string]: React.ReactElement } = {
  game: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path d="M14.9978834,5 C18.8638767,5 21.9978834,8.13400675 21.9978834,12 C21.9978834,15.7854517 18.9931001,18.8690987 15.2385332,18.995941 L14.9978834,19 L9.00211656,19 C5.13612331,19 2.00211656,15.8659932 2.00211656,12 C2.00211656,8.21454828 5.00689994,5.13090132 8.76146681,5.00405902 L9.00211656,5 L14.9978834,5 Z M14.75,12.5 C14.0596441,12.5 13.5,13.0596441 13.5,13.75 C13.5,14.4403559 14.0596441,15 14.75,15 C15.4403559,15 16,14.4403559 16,13.75 C16,13.0596441 15.4403559,12.5 14.75,12.5 Z M8,9 C7.62030423,9 7.30650904,9.28215388 7.25684662,9.64822944 L7.25,9.75 L7.25,11.248 L5.75,11.2487458 C5.33578644,11.2487458 5,11.5845322 5,11.9987458 C5,12.3784415 5.28215388,12.6922367 5.64822944,12.7418991 L5.75,12.7487458 L7.25,12.748 L7.25,14.25 C7.25,14.6642136 7.58578644,15 8,15 C8.37969577,15 8.69349096,14.7178461 8.74315338,14.3517706 L8.75,14.25 L8.75,12.748 L10.25,12.7487458 C10.6642136,12.7487458 11,12.4129593 11,11.9987458 C11,11.61905 10.7178461,11.3052548 10.3517706,11.2555924 L10.25,11.2487458 L8.75,11.248 L8.75,9.75 C8.75,9.33578644 8.41421356,9 8,9 Z M16.75,9 C16.0596441,9 15.5,9.55964406 15.5,10.25 C15.5,10.9403559 16.0596441,11.5 16.75,11.5 C17.4403559,11.5 18,10.9403559 18,10.25 C18,9.55964406 17.4403559,9 16.75,9 Z" />
    </svg>
  ),
  research: (
    <svg
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <path d="M23.8,25l-1.5-1.6C20.2,21,19,17.8,19,14.6c0-1.9,1-3.7,2.6-4.8c0.4-0.2,0.5-0.7,0.4-1.1C21.8,8.3,21.4,8,21,8H11 c-0.4,0-0.8,0.3-1,0.7c-0.1,0.4,0,0.9,0.4,1.1c1.6,1.1,2.6,2.9,2.6,4.8c0,3.2-1.2,6.3-3.3,8.8L8.2,25c-0.8,0.9-1,2.1-0.5,3.2 c0.5,1.1,1.5,1.8,2.7,1.8h11.1c1.2,0,2.2-0.7,2.7-1.8C24.8,27.1,24.6,25.9,23.8,25z M13.5,10h5c-1,1.3-1.5,2.9-1.5,4.6 c0,3.4,1.2,6.7,3.3,9.4h-8.5c2.1-2.7,3.3-6,3.3-9.4C15,12.9,14.5,11.3,13.5,10z M19,3c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C18,2.6,18.4,3,19,3z M13,4c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C12,3.6,12.4,4,13,4z M16,7c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C15,6.6,15.4,7,16,7z" />
    </svg>
  ),
};

export default function Projects({ currentCategory }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/projects")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProjects = useMemo(() => {
    return [...projects]
      .filter(
        (project) =>
          currentCategory === "none" || project.field === currentCategory,
      )
      .sort((a, b) => b.priority - a.priority);
  }, [projects, currentCategory]);

  useEffect(() => {
    setVisibleIndexes([]);
    filteredProjects.forEach((_, i) => {
      setTimeout(() => setVisibleIndexes((prev) => [...prev, i]), 100 + i * 80);
    });
  }, [filteredProjects]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        <div className="text-sm font-bold uppercase tracking-[0.3em] animate-pulse border-2 border-primary-dark dark:border-primary-light p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
          [ Accessing Deck... ]
        </div>
      </div>
    );
  }

  if (!loading && filteredProjects.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 opacity-50 tracking-[0.5em] font-bold">
        EMPTY SLOT
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start text-primary-dark dark:text-primary-light p-4">
      {filteredProjects.map((project, index) => {
        const isVisible = visibleIndexes.includes(index);
        const isEven = index % 2 !== 0;

        return (
          <Link
            href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
            prefetch
            key={project._id}
            className={`
              block transition-all duration-500 ease-out
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
            `}
            scroll={false}
          >
            <div className="group relative bg-primary-light dark:bg-primary-dark border-2 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-300">
              <div
                className={`flex flex-col ${isEven ? "md:flex-row-reverse text-right" : "md:flex-row"} gap-6`}
              >
                {/* Visual "Card" Icon */}
                <div
                  className={`
                  shrink-0 w-24 h-32 flex items-center justify-center 
                  bg-black/5 dark:bg-white/5 border-2 border-black/20 dark:border-white/20 rounded
                  transition-transform duration-500 group-hover:scale-110
                  ${isEven ? "rotate-3 group-hover:rotate-6" : "-rotate-3 group-hover:-rotate-6"}
                `}
                >
                  <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {icons[project.type] || icons["research"]}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col justify-center overflow-hidden">
                  <h3 className="text-xl font-bold uppercase tracking-tight transition-colors">
                    {project.name}
                  </h3>

                  <p className="my-3 text-sm opacity-70 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 mt-auto ${isEven ? "justify-end" : "justify-start"}`}
                  >
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-bold border-2 border-black/10 dark:border-white/20 uppercase tracking-tighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Tab (Balatro "Sticker" feel) */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
