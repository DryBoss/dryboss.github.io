"use client";

import { useState, useEffect } from "react";

import Menu from "./_homeComponents/menu";
import ThemeToggle from "./_homeComponents/themeToggleComponent/themeToggle";
import Intro from "./_homeComponents/intro";
import Featured from "./_homeComponents/featured";
import Status from "./_homeComponents/status";

export default function Home() {
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
    return <div className="h-screen w-full bg-primary-light" />;
  }

  return (
    <div
      className={`${darkMode ? "dark" : ""} h-screen w-full overflow-hidden selection:bg-orange-400`}
    >
      {/* 1. Global CRT Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="relative h-full w-full bg-primary-light dark:bg-primary-dark transition-none duration-0 flex justify-center items-center overflow-hidden">
        {/* Navigation & Utilities - Treated as UI HUD elements */}
        <div className="z-50">
          <Menu />
          <ThemeToggle setDarkMode={setDarkMode} />
          <Status />
        </div>

        {/* Decorative Background Elements (Card Backs) */}
        <div className="absolute top-[-10%] left-[-5%] w-96 h-[30rem] border-[4px] border-black/5 dark:border-white/5 rounded-3xl rotate-12 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-[30rem] border-[4px] border-black/5 dark:border-white/5 rounded-3xl -rotate-12 pointer-events-none" />

        {/* Main Split Layout */}
        <div className="flex w-full h-full max-w-[1920px] mx-auto relative z-10">
          {/* Left Side: Intro (The "Current Hand") */}
          <div className="flex-[3] flex items-center justify-center p-8 md:p-16 relative">
            <div className="transform -rotate-1 transition-transform duration-500 hover:rotate-0 w-full max-w-4xl">
              <div className="bg-primary-light dark:bg-primary-dark border-[3px] border-black dark:border-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] relative group">
                {/* Card Corner Accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-black/20 dark:border-white/20" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-black/20 dark:border-white/20" />

                <Intro />
              </div>
            </div>
          </div>

          {/* Right Side: Featured Projects (The "Shop Tray") */}
          <div className="hidden lg:flex flex-[2] items-center justify-center relative px-8">
            {/* Vertical Dotted Divider with a Label */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              <div className="h-32 w-[2px] bg-gradient-to-b from-transparent via-black/20 dark:via-white/20 to-transparent border-l-2 border-dashed border-black/20 dark:border-white/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] rotate-90 opacity-30 origin-center whitespace-nowrap">
                Featured_Access
              </span>
              <div className="h-32 w-[2px] bg-gradient-to-t from-transparent via-black/20 dark:via-white/20 to-transparent border-l-2 border-dashed border-black/20 dark:border-white/20" />
            </div>

            <div className="w-full transform rotate-1 transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
              <div className="bg-black/[0.02] dark:bg-white/[0.02] border-2 border-dashed border-black/10 dark:border-white/10 p-10 rounded-[2rem] relative">
                <Featured />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
