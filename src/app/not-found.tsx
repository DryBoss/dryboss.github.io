"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
  }, []);

  const buttonBaseClass = `
    inline-block px-8 py-3 text-xs font-black uppercase tracking-[0.3em] 
    border-2 border-black dark:border-white
    transition-all duration-150 ease-out
    hover:-translate-y-1 hover:-translate-x-1 
    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
    dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]
    active:translate-y-0 active:translate-x-0 active:shadow-none
  `;

  if (!mounted) return null;

  return (
    <main className={`${isDarkMode ? "dark" : ""} min-h-screen w-full`}>
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-primary-light dark:bg-primary-dark transition-colors duration-0 overflow-hidden selection:bg-orange-400 text-primary-dark dark:text-primary-light font-inherit">
        {/* 1. CRT Scanline Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        {/* Decorative Background "Card Shapes" for depth */}
        <div className="absolute top-20 right-[10%] w-64 h-96 border-4 border-black/5 dark:border-white/5 rounded-2xl rotate-12 -z-0 pointer-events-none" />
        <div className="absolute bottom-20 left-[5%] w-48 h-72 border-4 border-black/5 dark:border-white/5 rounded-2xl -rotate-6 -z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
          {/* Header "Seal" Style 404 */}
          <div className="mb-12 transform -rotate-1 hover:rotate-0 transition-transform duration-300 ease-out inline-block">
            <div className="border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] bg-primary-light dark:bg-primary-dark">
              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-widest italic text-tertiary-red select-none leading-none">
                404
              </h1>
            </div>
          </div>

          {/* Error "Card" Container - Exactly like your "Field" component */}
          <div className="w-full transition-all duration-300 hover:scale-[1.01] hover:-rotate-1 group mb-12">
            <div className="border-2 border-black dark:border-white p-10 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] bg-primary-light dark:bg-primary-dark relative text-center">
              {/* Card Corner Details */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white opacity-40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white opacity-40" />
              <p className="font-bold uppercase opacity-60 text-sm tracking-widest leading-relaxed">
                The requested page has been discarded or never existed
              </p>
            </div>
          </div>

          {/* Reset Action Area */}
          <div className="relative p-4 border-2 border-dashed border-black/10 dark:border-white/10 rounded-xl transition-all duration-300 hover:rotate-1">
            <Link
              href="/"
              className={`${buttonBaseClass} bg-tertiary-green text-black border-black`}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
