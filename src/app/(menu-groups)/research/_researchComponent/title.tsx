"use client";

import { useState, useEffect } from "react";

export default function Title() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      // Added 'transition-none duration-0' to ensure instant retro theme switching
      className={`p-5 text-primary-dark dark:text-primary-light flex items-center transition-none duration-0`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        // Increased size to w-10 h-10 to match the bolder text style
        className="w-10 h-10 mx-6"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>

      <h1
        // Typography: Bold, Uppercase, Tracking-widest to match "PROJECTS"
        // Animation: Smooth width transition for typing, instant color change
        className={`
          text-3xl font-bold uppercase tracking-widest
          overflow-hidden whitespace-nowrap 
        `}
      >
        Research
      </h1>
    </div>
  );
}
