"use client";

import { useState, useEffect, Suspense } from "react";

import Title from "./_projectsComponent/title";
import Filter from "./_projectsComponent/filter";
import ProjectsComp from "./_projectsComponent/projects";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const categories = ["web development", "machine learning"] as const;

  type Category = (typeof categories)[number] | "none";

  const [currentCategory, setCurrentCategory] = useState<Category>("none");

  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
  }, []);

  // Prevent hydration errors
  if (!mounted) {
    return <div className="min-h-screen bg-primary-light" />;
  }

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      {/* - Added 'transition-none duration-0' for instant retro switching.
         - content-center to keep things aligned.
      */}
      <div
        className={`bg-primary-light dark:bg-primary-dark min-h-screen transition-none duration-0`}
      >
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Title />

          <div className="my-10">
            <Filter
              categories={categories}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </div>

          <Suspense
            fallback={
              <div className="flex justify-center py-20">
                <div className="text-xl font-bold uppercase tracking-widest animate-pulse border-[3px] border-dashed border-primary-dark dark:border-primary-light p-6 rounded-[2rem]">
                  [ Reading Disk... ]
                </div>
              </div>
            }
          >
            <ProjectsComp currentCategory={currentCategory} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
