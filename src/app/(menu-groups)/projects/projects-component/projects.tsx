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
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(", ")}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Project Link
          </a>
        </div>
      ))}
    </div>
  );
}
