"use client";

import { useState, useEffect } from "react";

type Project = {
  _id: string;
  name: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    console.log("test");
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  if (projects.length === 0) return <p>Loading projects...</p>;

  return (
    <div className="mx-10 my-5">
      {projects.map((project, index) => (
        <div
          key={project._id}
          className={`flex ${index % 2 ? "flex-row-reverse text-right" : ""}`}
        >
          <div
            className={`w-32 h-40 p-3 bg-card-white text-xs ${
              index % 2 ? "text-card-red" : "text-card-black"
            } tracking-widest flex flex-col justify-between items-center rounded drop-shadow-lg hover:scale-105 cursor-pointer transition-transform duration-200 ease-out`}
          >
            <p>{project.name}</p>
            <p className="rotate-180">{project.name}</p>
          </div>
          <div className="p-5 flex flex-col justify-between">
            <h3 className="text-lg">{project.name}</h3>
            <p className="opacity-75 text-sm">{project.description}</p>
            <div className={`flex ${index % 2 ? "justify-end" : ""}`}>
              {project.technologies.map((technology) => (
                <p
                  key={technology}
                  className="px-2 py-1 text-xs border-2 rounded-full"
                >
                  {technology}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
