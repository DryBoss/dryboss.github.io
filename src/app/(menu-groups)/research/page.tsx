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

  // Prevent hydration errors
  if (!mounted) {
    return <div className="min-h-screen bg-primary-light" />;
  }

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      {/* - Added 'transition-none duration-0' for the retro instant switch.
        - Added container constraints for consistent alignment with Projects page.
      */}
      <div
        className={`bg-primary-light dark:bg-primary-dark min-h-screen transition-none duration-0`}
      >
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Title />

          <div className="my-12">
            <Field />
          </div>

          <div className="mb-12">
            <Publications />
          </div>
        </div>
      </div>
    </div>
  );
}
