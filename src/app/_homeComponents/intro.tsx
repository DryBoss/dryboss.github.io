"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  // Balatro "Voucher" style helper
  const buttonBaseClass = `
    inline-block px-5 py-2 text-xs font-black uppercase tracking-[0.2em] 
    border-2 border-black dark:border-white
    transition-all duration-150 ease-out
    hover:-translate-y-1 hover:-translate-x-1 
    hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]
    active:translate-y-0 active:translate-x-0 active:shadow-none
    cursor-pointer
  `;

  return (
    <div
      className={`
        p-2 md:p-6 max-w-3xl
        text-primary-dark dark:text-primary-light 
        transform transition-all duration-1000 ease-out
        ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
    >
      {/* HEADING */}
      <h1
        className={`
          mb-6 text-4xl md:text-6xl font-black uppercase tracking-widest leading-[0.8]
          transition-all duration-700
          ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
        `}
      >
        Taiham
      </h1>

      {/* SUB-HEADING */}
      <div className="mb-10 relative group">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-tertiary-green" />
        <p className="text-lg md:text-xl font-black uppercase tracking-widest leading-none pl-4">
          Full Stack Developer <br />
          <span className="text-sm md:text-lg opacity-60 tracking-widest">
            & Machine Learning Engineer
          </span>
        </p>
      </div>

      {/* DESCRIPTION */}
      <p className="mb-12 text-sm md:text-base leading-relaxed font-bold uppercase tracking-wider max-w-xl opacity-80 italic">
        Exploring technology with curiosity. Focused on{" "}
        <span className="bg-black/5 dark:bg-white/10 px-1 border-b-2 border-black dark:border-white">
          web apps
        </span>
        ,{" "}
        <span className="bg-black/5 dark:bg-white/10 px-1 border-b-2 border-black dark:border-white">
          machine learning
        </span>
        , and{" "}
        <span className="text-purple-500 underline decoration-2 underline-offset-4">
          quantum computing
        </span>
        .
      </p>

      {/* VOUCHER ACTION GROUP */}
      <div className="space-y-8">
        <div className="flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/taiham"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBaseClass} bg-tertiary-blue/20 text-current`}
          >
            Linkedin
          </a>
          <a
            href="https://github.com/DryBoss"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBaseClass} bg-black text-white dark:bg-white dark:text-black`}
          >
            Github
          </a>
          <a
            href="https://www.researchgate.net/profile/Abu-Saiman-Taiham"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBaseClass} bg-primary-green/20 text-current`}
          >
            Research Gate
          </a>
          <a
            href="mailto:taihamm.cu@gmail.com"
            className={`${buttonBaseClass} bg-tertiary-red/20 text-current`}
          >
            Mail
          </a>
        </div>

        {/* Highlighted Voucher (Resume) */}
        <div className="pt-4 border-t-2 border-dashed border-black/10 dark:border-white/10">
          <a
            href="/resume"
            target="_blank"
            className={`
                ${buttonBaseClass} 
                bg-tertiary-green text-black border-black 
                scale-110 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
              `}
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
}
