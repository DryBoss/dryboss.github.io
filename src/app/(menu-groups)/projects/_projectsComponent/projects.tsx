"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

// Type definitions
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

const icons: { [key: string]: React.ReactElement } = {
  game: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-20"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <path d="M14.9978834,5 C18.8638767,5 21.9978834,8.13400675 21.9978834,12 C21.9978834,15.7854517 18.9931001,18.8690987 15.2385332,18.995941 L14.9978834,19 L9.00211656,19 C5.13612331,19 2.00211656,15.8659932 2.00211656,12 C2.00211656,8.21454828 5.00689994,5.13090132 8.76146681,5.00405902 L9.00211656,5 L14.9978834,5 Z M14.75,12.5 C14.0596441,12.5 13.5,13.0596441 13.5,13.75 C13.5,14.4403559 14.0596441,15 14.75,15 C15.4403559,15 16,14.4403559 16,13.75 C16,13.0596441 15.4403559,12.5 14.75,12.5 Z M8,9 C7.62030423,9 7.30650904,9.28215388 7.25684662,9.64822944 L7.25,9.75 L7.25,11.248 L5.75,11.2487458 C5.33578644,11.2487458 5,11.5845322 5,11.9987458 C5,12.3784415 5.28215388,12.6922367 5.64822944,12.7418991 L5.75,12.7487458 L7.25,12.748 L7.25,14.25 C7.25,14.6642136 7.58578644,15 8,15 C8.37969577,15 8.69349096,14.7178461 8.74315338,14.3517706 L8.75,14.25 L8.75,12.748 L10.25,12.7487458 C10.6642136,12.7487458 11,12.4129593 11,11.9987458 C11,11.61905 10.7178461,11.3052548 10.3517706,11.2555924 L10.25,11.2487458 L8.75,11.248 L8.75,9.75 C8.75,9.33578644 8.41421356,9 8,9 Z M16.75,9 C16.0596441,9 15.5,9.55964406 15.5,10.25 C15.5,10.9403559 16.0596441,11.5 16.75,11.5 C17.4403559,11.5 18,10.9403559 18,10.25 C18,9.55964406 17.4403559,9 16.75,9 Z" />
      </g>
    </svg>
  ),
};

export default function Projects({ currentCategory }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  // Fetch all projects once
  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    return [...projects]
      .filter(
        (project) =>
          currentCategory === "none" || project.field === currentCategory
      )
      .sort((a, b) => b.priority - a.priority);
  }, [projects, currentCategory]);

  // Animate on filter change
  useEffect(() => {
    setVisibleIndexes([]);
    const initialDelay = 200;
    const stepDelay = 100;

    filteredProjects.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
      }, initialDelay + i * stepDelay);
    });
  }, [filteredProjects]);

  if (!projects.length) return <p>Loading projects...</p>;

  return (
    <div className="pb-5 grid md:grid-cols-2 items-center">
      {filteredProjects.map((project, index) => {
        const isVisible = visibleIndexes.includes(index);
        return (
          <Link
            href={`/projects/${project.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            prefetch
            key={project._id}
            className="block"
            scroll={false}
          >
            <div
              className={`flex items-center transform transition-all dark:border-2 border-primary-light duration-200 ease-out
                cursor-pointer ${
                  isVisible
                    ? "translate-x-0"
                    : index % 2
                    ? "translate-x-200"
                    : "-translate-x-200"
                }
                px-5 py-5 my-5 bg-primary-dark flex
                ${
                  index % 2
                    ? "ml-10 rounded-l-4xl flex-row-reverse text-right dark:border-r-0"
                    : "mr-10 rounded-r-4xl dark:border-l-0"
                }`}
            >
              <div
                className={`min-w-24 h-30 p-3 bg-card-white ${
                  index % 2
                    ? "text-card-red rotate-5"
                    : "text-card-black -rotate-5"
                } flex justify-center items-center rounded drop-shadow-lg transition-transform duration-200 ease-out`}
              >
                {icons[project.type]}
              </div>
              <div className="px-5 text-primary-light flex flex-col justify-between">
                <h3 className="my-2 text-lg">{project.name}</h3>
                <p className="my-1 text-sm">{project.description}</p>
                <div className={`my-2 flex ${index % 2 ? "justify-end" : ""}`}>
                  {project.technologies.map((tech) => (
                    <p
                      key={tech}
                      className="px-3 py-2 text-xs text-primary-dark bg-primary-light rounded-full"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
