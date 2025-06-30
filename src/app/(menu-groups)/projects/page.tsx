"use client";

import { useState, useEffect } from "react";

import Title from "./_projectsComponent/title";
import Filter from "./_projectsComponent/filter";
import ProjectsComp from "./_projectsComponent/projects";

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
    <div className={`${darkMode ? "dark" : ""}  overflow-hidden`}>
      <div className={`bg-primary-light dark:bg-primary-dark`}>
        <Title />
        <Filter />
        <ProjectsComp />
      </div>
    </div>
  );
}
