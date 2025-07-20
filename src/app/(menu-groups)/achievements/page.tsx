"use client";

import { useState, useEffect } from "react";
import Title from "./_achievementsComponent/title";
import AchievementsComp from "./_achievementsComponent/achievements";

export default function Achievements() {
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
      <div className={`bg-primary-light dark:bg-primary-dark min-h-screen`}>
        <Title />
        <AchievementsComp />
      </div>
    </div>
  );
}
