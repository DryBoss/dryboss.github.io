"use client";

import { useState } from "react";

import Menu from "./menu";
import ThemeToggle from "./themeToggleComponent/themeToggle";
import Intro from "./intro";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } overflow-hidden h-screen flex justify-center items-center bg-primary-light dark:bg-primary-dark`}
    >
      <Menu />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro />
    </div>
  );
}
