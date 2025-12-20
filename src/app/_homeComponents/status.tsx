"use client";

import { useEffect, useState } from "react";

export default function Status() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 1000); // 1s delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-[9999] min-h-[56px]
        flex items-center gap-4 px-4 py-2
        bg-primary-light dark:bg-primary-dark 
        text-primary-dark dark:text-primary-light
        border-b-[3px] border-current
        transform transition-transform duration-300 ease-out
        ${mounted ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* LED Indicator: 
          - Added border-2 border-black to look like a physical hardware light.
          - Kept the blink animation.
      */}
      <div className="flex-shrink-0 w-4 h-4 bg-tertiary-green rounded-full border-2 border-black blink shadow-[0_0_8px_rgba(0,255,0,0.6)]"></div>

      <p className="text-xs md:text-sm font-bold uppercase tracking-widest leading-tight">
        Quantum computing & ML researcher • Web Dev • Open to partnerships
      </p>

      <style jsx>{`
        .blink {
          animation: blink 1.5s infinite step-end;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
