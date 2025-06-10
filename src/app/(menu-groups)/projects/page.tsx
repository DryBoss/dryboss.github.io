"use client";

import { useState, useEffect } from "react";

import Title from "./projects-component/title";
import Filter from "./projects-component/filter";
import ProjectsComp from "./projects-component/projects";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } overflow-hidden h-screen bg-primary-light dark:bg-primary-dark`}
    >
      <Title />
      <Filter />
      <ProjectsComp />
    </div>
  );
}
