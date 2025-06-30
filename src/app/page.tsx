"use client";

import { useState, useEffect } from "react";

import Menu from "./_homeComponents/menu";
import ThemeToggle from "./_homeComponents/themeToggleComponent/themeToggle";
import Intro from "./_homeComponents/intro";

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
      <Intro />
    </div>
  );
}
