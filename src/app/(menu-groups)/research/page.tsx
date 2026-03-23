"use client";

import { useState, useEffect } from "react";
import Title from "./_researchComponent/title";
import Publications from "./_researchComponent/publications";
import Field from "./_researchComponent/field";

export default function Achievements() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
      className={`${darkMode ? "dark" : ""} min-h-screen font-inherit selection:bg-orange-400`}
    >
      {/* 1. CRT Scanline Overlay (Retro Balatro Vibe) */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="bg-primary-light dark:bg-primary-dark min-h-screen transition-none duration-0 relative overflow-hidden">
        {/* Subtle background "Card Shapes" for depth */}
        <div className="absolute top-20 right-[10%] w-64 h-96 border-4 border-black/5 dark:border-white/5 rounded-2xl rotate-12 -z-0 pointer-events-none" />
        <div className="absolute bottom-20 left-[5%] w-48 h-72 border-4 border-black/5 dark:border-white/5 rounded-2xl -rotate-6 -z-0 pointer-events-none" />

        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
          {/* Header "Seal" - Hard shadow & slight tilt */}
          <div className="mb-16 transform -rotate-1 hover:rotate-0 transition-transform duration-300 ease-out inline-block">
            <div className="border-4 border-black dark:border-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] bg-primary-light dark:bg-primary-dark">
              <Title />
            </div>
          </div>

          {/* Field Section - Mimics a "Tarot Card" container */}
          <div className="my-12 transition-all duration-300 hover:scale-[1.01] hover:-rotate-1 group">
            <div className="border-2 border-black dark:border-white p-8 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] bg-primary-light dark:bg-primary-dark relative">
              {/* Card Corner Detail */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white opacity-40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white opacity-40" />

              <Field />
            </div>
          </div>

          {/* Publications Section - The "Collection" grid feel */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] text-primary-dark dark:text-primary-light ">
                Publications
              </span>
              <div className="h-[1px] flex-grow bg-black/20 dark:bg-white/20" />
            </div>

            <div className="transition-all duration-300 hover:rotate-1">
              <div className="bg-black/[0.03] dark:bg-white/[0.03] border-2 border-dashed border-black/20 dark:border-white/20 p-6 rounded-xl">
                <Publications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
