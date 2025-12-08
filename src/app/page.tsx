"use client";

import { useState, useEffect } from "react";

import Menu from "./_homeComponents/menu";
import ThemeToggle from "./_homeComponents/themeToggleComponent/themeToggle";
import Intro from "./_homeComponents/intro";
import Featured from "./_homeComponents/features";

export default function Home() {
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
      } overflow-hidden h-screen flex justify-center items-center bg-primary-light dark:bg-primary-dark`}
    >
      <Menu />
      <ThemeToggle setDarkMode={setDarkMode} />
      <div className="flex w-full h-full">
        <div className="flex-[3] flex items-center justify-center">
          <Intro darkMode={darkMode} />
        </div>
        <div className="hidden lg:flex flex-[2] items-center justify-center">
          <Featured darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
