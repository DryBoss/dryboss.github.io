"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay to ensure the slide-up animation is noticeable
    setTimeout(() => setMounted(true), 100);
  }, []);

  // Button base style helper to keep JSX clean
  const buttonBaseClass = `
    px-6 py-2 text-sm font-bold uppercase tracking-widest 
    border-[3px] border-black rounded-full 
    transition-all duration-0
    hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
    active:translate-y-0 active:shadow-none
  `;

  return (
    <div
      className={`
        p-4 max-w-2xl
        text-primary-dark dark:text-primary-light 
        transform transition-all duration-700 ease-out 
        ${mounted ? "translate-y-0 opacity-100" : "translate-y-[20%] opacity-0"}
      `}
    >
      {/* HEADING */}
      <h1
        className={`
          mb-6 text-5xl md:text-7xl tracking-tighter
          overflow-hidden whitespace-nowrap 
          transition-[width] duration-[1000ms] ease-linear
          ${mounted ? "w-[12ch]" : "w-0"}
        `}
      >
        Hi, I&apos;m Taiham
      </h1>

      {/* SUB-HEADING */}
      <p className="mb-8 text-xl md:text-2xl font-bold uppercase tracking-widest opacity-80 border-l-[3px]  pl-4">
        Full Stack Developer &<br /> Machine Learning Engineer
      </p>

      {/* DESCRIPTION */}
      <p className="mb-10 text-lg leading-relaxed font-medium max-w-lg">
        Exploring technology with curiosity. Focused on{" "}
        <span className="font-bold">web apps</span>,{" "}
        <span className="font-bold">machine learning</span>, and an emerging
        interest in <span className="font-bold">quantum computing</span>.
      </p>

      {/* BUTTONS CONTAINER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Socials Group */}
        <div className="flex flex-wrap gap-3">
          <button className={`${buttonBaseClass} bg-tertiary-blue text-black`}>
            Linkedin
          </button>
          <button className={`${buttonBaseClass} bg-tertiary-black text-white`}>
            Github
          </button>
          <button className={`${buttonBaseClass} bg-primary-green text-black`}>
            Research Gate
          </button>
          <button className={`${buttonBaseClass} bg-tertiary-red text-black`}>
            Mail
          </button>
        </div>

        {/* Resume Button (Separated for emphasis) */}
        <button
          className={`${buttonBaseClass} bg-tertiary-green text-black md:scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]`}
        >
          Resume
        </button>
      </div>
    </div>
  );
}
