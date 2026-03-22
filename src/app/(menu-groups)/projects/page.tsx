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

  if (!mounted) {
    return <div className="min-h-screen bg-primary-light" />;
  }

  return (
    <div
      className={`${darkMode ? "dark" : ""} min-h-screen selection:bg-orange-400`}
    >
      {/* 1. CRT Scanline Overlay (Consistency with Achievements) */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="bg-primary-light dark:bg-primary-dark min-h-screen transition-none duration-0 relative overflow-hidden">
        {/* Background Decorative "Cards" */}
        <div className="absolute top-40 left-[2%] w-72 h-48 border-2 border-black/5 dark:border-white/5 rounded-xl rotate-6 -z-0 pointer-events-none" />
        <div className="absolute top-1/2 right-[5%] w-64 h-96 border-2 border-black/5 dark:border-white/5 rounded-xl -rotate-12 -z-0 pointer-events-none" />

        <div className="w-full mx-auto px-4 md:px-12 2xl:px-24 py-12 relative z-10">
          {/* Header Placard - Matches Achievements Title */}
          <div className="mb-12 transform rotate-1 hover:rotate-0 transition-transform duration-300 ease-out inline-block">
            <div className="border-4 border-black dark:border-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] bg-primary-light dark:bg-primary-dark">
              <Title />
            </div>
          </div>

          {/* Filter Bar - Styled like a "Control Panel" */}
          <div className="my-10 transition-all duration-300 hover:-translate-y-1">
            <div className="inline-block bg-black/[0.03] dark:bg-white/[0.03] border-2 border-dashed border-black/20 dark:border-white/20 p-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
              <Filter
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
              />
            </div>
          </div>

          <Suspense
            fallback={
              <div className="flex justify-center py-40">
                {/* Tactical Loading State */}
                <div className="text-sm font-bold uppercase tracking-[0.3em] animate-pulse border-2 border-black dark:border-white p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] bg-primary-light dark:bg-primary-dark">
                  [ Scanning Database... ]
                </div>
              </div>
            }
          >
            {/* The actual project grid container */}
            <div className="mt-8">
              <ProjectsComp currentCategory={currentCategory} />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
