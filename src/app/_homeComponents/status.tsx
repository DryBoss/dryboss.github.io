"use client";
import { useEffect, useState } from "react";

export default function Status() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-[9999] min-h-[40px]
        flex items-center gap-6 px-6 py-2
        bg-primary-light dark:bg-primary-dark 
        text-primary-dark dark:text-primary-light
        /* Balatro Thick Underline */
        border-b-4 border-black dark:border-white
        transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)
        ${mounted ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Balatro "Chip" Indicator: Square, hard border, neon glow */}
      <div className="relative flex-shrink-0 w-3 h-3 bg-tertiary-green border-2 border-black dark:border-white shadow-[0_0_10px_rgba(34,197,94,0.5)] overflow-hidden">
        <div className="absolute inset-0 blink bg-white opacity-40" />
      </div>

      {/* The Ticker Text: High-contrast, tight tracking */}
      <div className="flex items-center gap-8 overflow-hidden whitespace-nowrap">
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3">
          <span>Quantum computing & ML researcher</span>
          <span className="text-tertiary-red">•</span>
          <span>Full Stack Web Dev</span>
          <span className="text-tertiary-red">•</span>
          <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-0.5">
            Open to partnerships
          </span>
        </p>
      </div>

      <style jsx>{`
        .blink {
          animation: blink 1s infinite step-end;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
