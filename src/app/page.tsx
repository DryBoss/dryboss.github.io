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

  // Prevent hydration mismatch (flash of wrong theme)
  if (!mounted) {
    return <div className="h-screen w-full bg-primary-light" />;
  }

  return (
    <div
      className={`${darkMode ? "dark" : ""} h-screen w-full overflow-hidden`}
    >
      {/* Container:
        - Added 'relative' to handle the absolute positioning of Menu/Status/Toggle
        - Added 'transition-none duration-0' for the retro instant switch feel 
      */}
      <div className="relative h-full w-full bg-primary-light dark:bg-primary-dark transition-none duration-0 flex justify-center items-center">
        {/* Navigation & Utilities */}
        <Menu />
        <ThemeToggle setDarkMode={setDarkMode} />
        <Status />

        {/* Main Split Layout */}
        <div className="flex w-full h-full max-w-[1920px] mx-auto">
          {/* Left Side: Intro */}
          <div className="flex-[3] flex items-center justify-center p-6 relative">
            <Intro />
          </div>

          {/* Right Side: Featured Projects 
              - Added a dashed border separator for that 'blueprint' look
          */}
          <div className="hidden lg:flex flex-[2] items-center justify-center border-l-[3px] border-dashed border-primary-dark/20 dark:border-primary-light/20 relative">
            <Featured />
          </div>
        </div>
      </div>
    </div>
  );
}
