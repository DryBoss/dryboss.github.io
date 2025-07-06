"use client";

import { useState, useEffect, Suspense } from "react";

import Title from "./_projectsComponent/title";
import Filter from "./_projectsComponent/filter";
import ProjectsComp from "./_projectsComponent/projects";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  const categories = ["web development", "machine learning"] as const;

  type Category = (typeof categories)[number] | "none";

  const [currentCategory, setCurrentCategory] = useState<Category>("none");

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`${darkMode ? "dark" : ""}  overflow-hidden`}>
        <div className={`bg-primary-light dark:bg-primary-dark min-h-screen`}>
          <Title />
          <Filter
            categories={categories}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <ProjectsComp currentCategory={currentCategory} />
        </div>
      </div>
    </Suspense>
  );
}
